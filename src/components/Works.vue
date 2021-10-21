<template>
  <div class="works">
    <TopHeader :theme="2"></TopHeader>
    <div class="poster">
      <img src="../assets/images/works/poster.png" alt="">
    </div>
    <div class="imgs">
      <div class="row" v-for="(gifArr, index) in gifConfig" :key="index">
        <div class="work-item"
          v-for="(gif, gifIndex) in gifArr"
          :key="`gif${gifIndex}`"
          @mouseenter="() => {onHover(`${index}/${gifIndex}`)}" 
          @mouseleave="onMouseLeave"
          @click='() => {onClickWork(gif.url)}'
        >
          <img :src='gif.card' alt="" >
          <img :class="['hover', {show: hoverIndex == `${index}/${gifIndex}`}]" :src='gif.hover' alt="">
        </div>
      </div>
    </div>
    <div class="footer">
      <p>COPYRIGHT © 2021 SOYA STUDIO. ALL RIGHTS RESERVED.</p>
      <div class="right">
        <a target="_blank" href="https://www.zcool.com.cn/u/15601279">Zcool</a>
        <a target="_blank" href="https://www.behance.net/studiosoya">Behance</a>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
const URLS = Object.freeze([
  'https://www.zcool.com.cn/work/ZNTU0NjI2NjQ=.html',
  'https://www.zcool.com.cn/work/ZNTUyMjQ2MTI=.html',
  'https://www.zcool.com.cn/work/ZNTUwODc5MTI=.html',
  'https://www.zcool.com.cn/work/ZNTQ2NTA0NDA=.html',
  'https://www.zcool.com.cn/work/ZNTQzMDQ1NjA=.html',
  'https://www.zcool.com.cn/work/ZNTQwMjAzNjg=.html',
  'https://www.zcool.com.cn/work/ZNTM3MTk0MDg=.html',
  'https://www.zcool.com.cn/work/ZNTM1NjMxNjg=.html',
  'https://www.zcool.com.cn/work/ZNTI2MTE2MDg=.html',
  'https://www.zcool.com.cn/work/ZNTE3NDY3MzY=.html',
  'https://www.zcool.com.cn/work/ZNTA1MDI2MjQ=.html',
  'https://www.zcool.com.cn/work/ZNTAyNDUyMTY=.html',
  'https://www.zcool.com.cn/work/ZNDk0MTYxMjg=.html',
  'https://www.zcool.com.cn/work/ZNDg2MTQ4NDQ=.html',
  'https://www.zcool.com.cn/work/ZNDgyNTcyOTI=.html',
  'https://www.zcool.com.cn/work/ZNDY2MDQwODg=.html',
  'https://www.zcool.com.cn/work/ZNDQwNjg4ODQ=.html',
  'https://www.zcool.com.cn/work/ZNDM3ODc1NzY=.html',
  'https://www.zcool.com.cn/work/ZNDM2MzU0Mjg=.html',
  'https://www.zcool.com.cn/work/ZNDM2MzQyNDA=.html',
  'https://www.zcool.com.cn/work/ZNDMyNDc5Njg=.html',
  'https://www.zcool.com.cn/work/ZNDA1MTg0Njg=.html',
  'https://www.zcool.com.cn/work/ZNDAxNTQzMjQ=.html',
  'https://www.zcool.com.cn/work/ZNDAwOTE0MzY=.html',
  'https://www.zcool.com.cn/work/ZMzk2MzEyODQ=.html',
  'https://www.zcool.com.cn/work/ZMzk2MDM1NDg=.html',
  'https://www.zcool.com.cn/work/ZMzQ4NDY0MjA=.html',
  'https://www.zcool.com.cn/work/ZMzM1Mjc3NjQ=.html',
  'https://www.zcool.com.cn/work/ZMzM0OTUyMDQ=.html',
  'https://www.zcool.com.cn/work/ZMzM0Nzc1NjA=.html',
  'https://www.zcool.com.cn/work/ZMzIyNzIzMjQ=.html',
  'https://www.zcool.com.cn/work/ZMzE3MzE1MDA=.html',
  'https://www.zcool.com.cn/work/ZMzAyODQyMzI=.html',
  'https://www.zcool.com.cn/work/ZMzAyNzY0NDg=.html',
]);


export default {
  name: 'Works',
  components: {
    TopHeader
  },
  props: {
    msg: String,
  },
  data() {
    return {
      imgCount:Number,
      imagesNameArr:Array,
      gifConfig: [],
      hoverIndex: 0,
      URLS
    }
  },
  methods:{
    onHover(index) {
      this.hoverIndex = index;
    },
    onMouseLeave() {
      this.hoverIndex = 0;
    },
    onClickWork(url) {
      window.open(url, '_blank');
    }
  },
  created() {
    const gifContext = require.context("../assets/gif", false);
    const imgContext = require.context("../assets/images/cover", false);
    const result = gifContext.keys().map((item, index) => {
      return {
        card: require('../assets/gif/' + item.slice(2)),
        hover: require("../assets/images/cover/" + imgContext.keys()[index].slice(2)),
        url: this.URLS[index]
      }
    });
    console.log(result);

    //按照一行3个整理数据
    const gitConfig = [];
    let pos = 0;
    let len = result.length;
    while (pos < len) {
      const arr = result.slice(pos, pos + 3);
      gitConfig.push([...arr])
      pos += 3;
    }
    this.gifConfig = Object.freeze(Object.freeze(gitConfig));
  }
}
</script>

<style lang="less" scoped>
.works{
  color: #000;
  .poster {
    background-color: #000000;
    width: 100%;
    padding-bottom: 6%;
    img {
      width: 100%;
    }
  }
  .imgs{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 6% 4% 4%;
    .row {
      display: flex;
      justify-content: space-between;
      padding-bottom: 3%;
      width: 100%;
      .work-item {
        position: relative;
        width: 32.5%;
        cursor: pointer;
        .hover {
          position: absolute;
          top: 0;
          left:0;
          opacity: 0;
          transition: 200ms ease-out;
          &.show {
            opacity: 1;
          }
        }
      }
    }
    img{
      width: 100%;
    }
  }
  .footer{
    font-family: 'Montserrat';
    text-align: left;
    margin: 0 4% 4%;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    p{
      display: inline-block;
    }
    .right {
      width: 32.5%;
      a{
        width: 120px;
        margin-right: 25px;
        text-decoration: none;
        color: black;
        &:nth-child(1) {
          margin-right: 16%;
        }
      }
      a:hover,a:visited{
        text-decoration: revert;
      }
    }
    
  }
  overflow: hidden;
}
</style>
