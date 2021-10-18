<template>
  <div class="home">
    <div class="content">
      <div class="top">
        <span>索亚工作室<span>®</span></span>
        <span>Soya Studio is a creative motion design<br/>agency, based in Shenzhen.</span>
      </div>
      <div class="main">
        <div class="logo" >
          <img class="logo-item" :src="imgs.logoS" alt="">
          <div class="logo-item" @mouseenter="() => {onHover(1)}" @mouseleave="onMouseLeave" @click="goWork">
            <img :src="imgs.logoO" alt="">
            <img :class="['hoverimg', {show: hoverIndex==1}]" :src="imgs.hover1" alt="">
          </div>
          <img class="logo-item" :src="imgs.logoY" alt="">
          <div class="logo-item" @mouseenter="() => {onHover(2)}" @mouseleave="onMouseLeave" @click="goWork">
            <img :src="imgs.logoA" alt="">
            <img :class="['hoverimg', {show: hoverIndex==2}]" :src="imgs.hover2" alt="">
          </div>
        </div>
        <div class="fish-container">
          <img class="fish" :src="imgs.fish" alt="">
          <div class="eye" ref="eye">
            <p class="pupil" :style="pupilStyle"></p>
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
    <div class="fotter">Copyright © 2021 SOYA Studio. All rights reserved.</div>
  </div>
</template>

<script>
const logoS  = require('@img/home/logo-s.png');
const logoO  = require('@img/home/logo-o.png');
const logoY  = require('@img/home/logo-y.png');
const logoA  = require('@img/home/logo-a.png');
const fish = require('@img/home/icon-fish.png')
const hover1  = require('@img/home/icon-hover1.png');
const hover2  = require('@img/home/icon-hover2.png');
export default {
  name: 'Home',
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
      eyeStyle: {
        left: 0,
        top: 0
      },
      hoverIndex: 0
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove);
    setTimeout(() => {
      const rect = this.$refs.eye.getBoundingClientRect();
      this.eyeStyle = {
        top: rect.top,
        left: rect.left,
        radius: this.$refs.eye.clientWidth / 2,
      };
    })
  },
  methods: {
    onHover(index) {
      this.hoverIndex = index;
    },
    onMouseLeave() {
      this.hoverIndex = 0;
    },
    goWork(){
      this.$router.push('works')
    },
    onMouseMove(evt) {
      const p1 = [evt.clientX, evt.clientY];
      const p2 = [this.eyeStyle.left + this.eyeStyle.radius, this.eyeStyle.top + this.eyeStyle.radius];
      let distance = this.distance(p1, p2);
      // 5是瞳孔的半径
      if(distance <= this.eyeStyle.radius - 5) {
        this.pupilStyle = {
          top: `${p1[1] - this.eyeStyle.top - 5}px`,
          left: `${p1[0] - this.eyeStyle.left - 5}px`
        }
      }
      else {
        let tempX = p2[0] - p1[0];
        let tempY = p2[1] - p1[1];
        if(tempX == 0 && tempY > 0) {
          this.pupilStyle = {
            top: `${0}px`,
            left: `${this.eyeStyle.radius - 5}px`
          }
          return;
        }
        if(tempX == 0 && tempY < 0) {
          this.pupilStyle = {
            top: `${this.eyeStyle.radius * 2 - 10}px`,
            left: `${this.eyeStyle.radius - 5}px`
          }
          return;
        }
        if(tempX > 0 && tempY == 0) {
          this.pupilStyle = {
            top: `${this.eyeStyle.radius - 5}px`,
            left: `${0}px`
          }
          return;
        }
        if(tempX < 0 && tempY == 0) {
          this.pupilStyle = {
            top: `${this.eyeStyle.radius - 5}px`,
            left: `${this.eyeStyle.radius * 2 - 10}px`
          }
          return;
        }

        let angle = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
        let y = Math.sin(angle) * (this.eyeStyle.radius - 5);
        let x = Math.cos(angle) * (this.eyeStyle.radius - 5);
        
        if(tempX > 0 && tempY > 0) {
          // 第二象限
          x = x * -1
          y = y * -1
        }
        else if(tempX > 0 && tempY < 0) {
          // 第三象限
          x = x * -1
          y = y * -1
        }
        
        this.pupilStyle = {
          top: `${y + this.eyeStyle.radius - 5}px`,
          left: `${x + this.eyeStyle.radius - 5}px`
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
        position: relative;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
        margin-right: 10px;
        line-height: 36px;
        span{
          transform: scale(0.6);
          transform-origin: right top;
          position: absolute;
          right: 0;
          top: 0;
          margin: 2px -22px;
        }
      }
      span:nth-child(2) {
        font-size: 16px;
        font-family: Montserrat;
        font-weight: 500;
        color: #FFFFFF;
        text-align: left;
        line-height: 16px;
        margin-left: 94px;
      }
    }
    .main {
      display: flex;
      align-items: center;
      .logo{
        margin-right: 42px;
        .logo-item:not(:nth-last-child(1)) {
          margin-right: 32px;
        }
        .logo-item {
          position: relative;
          display: inline-block;
          width: 102px;
          height: 136px;
          .show {
            opacity: 1 !important;
            transform: translate(-50%, -50%) scale(1) rotate(20deg) !important;
          }
          .hoverimg{
            position: absolute;
            z-index: 100;
            top: 50%;
            left: 50%;
            opacity: 0;
            transition: 200ms ease-in-out;
            transform: translate(-50%, -50%) scale(0.8) rotate(0deg);
          }
        }
      }
      
      .fish-container{
        position: relative;
        width: 215px;
        height: 163px;
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .bottom{
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
  }
  .fotter {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    color: #D3D3D3;
    margin-bottom: 76px;
  }
}
</style>
