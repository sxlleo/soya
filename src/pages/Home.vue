<template>
  <div class="home">
    <div class="content">
      <div class="top">
        <span>索亚工作室<i>®</i></span>
        <span>
          SOYA STUDIO IS A CREATIVE MOTION DESIGN <br/>AGENCY, BASED IN SHENZHEN.
        </span>
      </div>
      <div class="main">
        <div class="logo" >
          <img class="logo-item" :src="imgs.logoS" alt="">
          <div class="logo-item" @click="goWork">
            <img class="letter" :src="imgs.logoO" @mouseenter="() => {onHover(1)}" @mouseleave="onMouseLeave" alt="">
            <img :class="['hoverimg', {show: hoverIndex==1}]" :src="imgs.hover1" alt="">
          </div>
          <img class="logo-item" :src="imgs.logoY" alt="">
          <div class="logo-item"  @click="goAbout">
            <img class="letter" :src="imgs.logoA" @mouseenter="() => {onHover(2)}" @mouseleave="onMouseLeave" alt="">
            <img :class="['hoverimg', {show: hoverIndex==2}]" :src="imgs.hover2" alt="">
          </div>
        </div>
        <div class="fish-container">
          <img class="fish" :src="imgs.fish" alt="">
          <div class="eye" ref="eye">
            <p class="pupil" ref="pupil" :style="pupilStyle"></p>
          </div>
        </div>
        <!-- <img :src="" alt=""> -->
      </div>
      <div class="bottom">
        <p class="desp">
          <span>MOTION</span>
          <span>DESIGN</span>
        </p>
        <p class="desp">
          <span>CREATIVE</span>
          <span>ADVERTISING</span>
        </p>
        <p class="desp">
          <span>3D</span>
          <span>DESIGN</span>
        </p>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import { debounce } from 'lodash';
const logoS  = require('@img/home/logo-S.png');
const logoO  = require('@img/home/logo-O.png');
const logoY  = require('@img/home/logo-Y.png');
const logoA  = require('@img/home/logo-A.png');
const fish = require('@img/home/icon-fish.png')
const hover1  = require('@img/home/icon-hover1.png');
const hover2  = require('@img/home/icon-hover2.png');
export default {
  name: 'Home',
  components: {
    Footer
  },
  props: {
    msg: String
  },
  data() {
    return {
      imgs: {
        logoS,
        logoO,
        logoY,
        logoA,
        fish,
        hover1,
        hover2
      },
      pupilStyle: {

      },
      // 眼球半径
      pupilRadius: 0,
      eyeStyle: {
        left: 0,
        top: 0
      },
      hoverIndex: 0
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', debounce(this.updateEyeStyle, 200));
    setTimeout(() => {
      this.updateEyeStyle();
      this.pupilRadius = this.$refs.pupil.clientWidth / 2;
    })
  },
  methods: {
    updateEyeStyle() {
      const rect = this.$refs.eye.getBoundingClientRect();
      this.eyeStyle = {
        top: rect.top,
        left: rect.left,
        radius: this.$refs.eye.clientWidth / 2,
      };
    },
    onHover(index) {
      this.hoverIndex = index;
    },
    onMouseLeave() {
      this.hoverIndex = 0;
    },
    goWork(){
      this.$router.push('works')
    },
    goAbout() {
      this.$router.push('about')
    }, 
    onMouseMove(evt) {
      const p1 = [evt.clientX, evt.clientY];
      const p2 = [this.eyeStyle.left + this.eyeStyle.radius, this.eyeStyle.top + this.eyeStyle.radius];
      let distance = this.distance(p1, p2);
      // pupilRadius是瞳孔的半径
      if(distance <= this.eyeStyle.radius - this.pupilRadius) {
        this.pupilStyle = {
          top: `${p1[1] - this.eyeStyle.top - this.pupilRadius}px`,
          left: `${p1[0] - this.eyeStyle.left - this.pupilRadius}px`
        }
      }
      else {
        let tempX = p2[0] - p1[0];
        let tempY = p2[1] - p1[1];
        if(tempX == 0 && tempY > 0) {
          this.pupilStyle = {
            top: 0,
            left: `${this.eyeStyle.radius - this.pupilRadius}px`
          }
          return;
        }
        if(tempX == 0 && tempY < 0) {
          this.pupilStyle = {
            top: `${this.eyeStyle.radius * 2 - this.pupilRadius * 2}px`,
            left: `${this.eyeStyle.radius - this.pupilRadius}px`
          }
          return;
        }
        if(tempX > 0 && tempY == 0) {
          this.pupilStyle = {
            top: `${this.eyeStyle.radius - this.pupilRadius}px`,
            left: 0
          }
          return;
        }
        if(tempX < 0 && tempY == 0) {
          this.pupilStyle = {
            top: `${this.eyeStyle.radius - this.pupilRadius}px`,
            left: `${this.eyeStyle.radius * 2 - this.pupilRadius * 2}px`
          }
          return;
        }

        let angle = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
        let y = Math.sin(angle) * (this.eyeStyle.radius - this.pupilRadius);
        let x = Math.cos(angle) * (this.eyeStyle.radius - this.pupilRadius);
        
        if((tempX > 0 && tempY > 0) || (tempX > 0 && tempY < 0)) {
          // 第二象限 或 第三象限
          x = x * -1
          y = y * -1
        }
        
        this.pupilStyle = {
          top: `${y + this.eyeStyle.radius - this.pupilRadius}px`,
          left: `${x + this.eyeStyle.radius - this.pupilRadius}px`
        }
      }
    },
    distance(p1, p2){
      var a = p2[0]-p1[0];
      var b = p2[1]-p1[1];
      return Math.sqrt(a*a+b*b);
    },
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: black;
  position: relative;
  .content {
    margin: auto;
    .top {
      display: flex;
      align-items: center;
      margin-bottom: 88px;
      span:nth-child(1) {
        display: inline-block;
        position: relative;
        width: 286px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 36px;
        text-align: left;
        i{
          display: inline-block;
          font-style: normal;
          transform: scale(0.6);
          transform-origin: left top;
        }
      }
      span:nth-child(2) {
        font-size: 16px;
        font-family: 'Montserrat';
        font-weight: 500;
        color: #FFFFFF;
        text-align: left;
      }
    }
    .main {
      display: flex;
      align-items: center;
      .logo{
        display: inline-flex;
        margin-right: 42px;
        white-space: nowrap;
        .logo-item:not(:nth-last-child(1)) {
          margin-right: 32px;
        }
        .logo-item {
          position: relative;
          display: inline-block;
          width: 102px;
          height: 136px;
          .letter {
            width: 100%;
          }
          .show {
            opacity: 1 !important;
            transform: translate(-50%, -50%) scale(1) rotate(0) !important;
          }
          .hoverimg{
            position: absolute;
            z-index: 100;
            top: 50%;
            left: 50%;
            opacity: 0;
            transition: 250ms ease-in-out;
            transform: translate(-50%, -50%) scale(0.9) rotate(-180deg);
            width: 227px;
            pointer-events: none;
          }
        }
      }
      
      .fish-container{
        position: relative;
        width: 215px;
        height: 163px;
        .fish {
          width: 100%;
        }
        .eye{
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          left: 17px;
          top: 38px;
          .pupil{
            position: absolute;
            background-color: #000;
            width: 14px;
            height: 14px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .bottom{
    font-family: 'Montserrat';
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    margin-top: 80px;
    .desp{
      text-align: left;
      width: 40%;
      span{
        display: block;
      }
    }
    .desp:nth-child(1) {
      min-width: 286px;
    }
    .desp:nth-child(2) {
      min-width: 367px;
    }
  }
  .footer {
    position: absolute;
    bottom: 76px;
    transform: translateX(-15px);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    color: #D3D3D3;
  }
}
</style>
