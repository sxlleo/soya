<template>
  <div class="works">
    <TopHeader :theme="2"></TopHeader>
    <div class="poster">
      <img src="../assets/images/works/works.png" alt="">
    </div>
    <div class="imgs">
      <div class="row" v-for="(gifArr, index) in gifConfig" :key="index">
        <div class="img"
          v-for="(gif, gifIndex) in gifArr"
          :key="`gif${gifIndex}`"
          @mouseenter="() => {onHover(`${index}/${gifIndex}`)}" 
          @mouseleave="onMouseLeave">
          <img :src='gif.card' alt="" >
          <img :class="['hover', {show: hoverIndex == `${index}/${gifIndex}`}]" :src='gif.hover' alt="">
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 2021 SOYA Studio. All rights reserved.</p>
      <a class="zcool" target="_blank" href="https://www.behance.net/studiosoya">Behance</a>
      <a class="zcool" target="_blank" href="https://www.zcool.com.cn/u/15601279">Zcool</a>
    </div>
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
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
    }
  },
  methods:{
    onHover(index) {
      this.hoverIndex = index;
    },
    onMouseLeave() {
      this.hoverIndex = 0;
    }
  },
  mounted(){
    console.log('mounted')
  },
  created() {
    const gifContext = require.context("../assets/gif", false);
    const imgContext = require.context("../assets/images/cover", false);
    const result = gifContext.keys().map((item, index) => {
      return {
        card: require('../assets/gif/' + item.slice(2)),
        hover: require("../assets/images/cover/" + imgContext.keys()[index].slice(2))
      }
    });

    //按照一行3个整理数据
    const gitConfig = [];
    let pos = 0;
    let len = result.length;
    while (pos < len) {
      const arr = result.slice(pos, pos + 3);
      gitConfig.push([...arr])
      pos += 3;
      console.log(arr);
    }
    this.gifConfig = Object.freeze(gitConfig);
  }
}
</script>

<style lang="less" scoped>
.works{
  color: #000;
  .poster {
    background-color: #000000;
    width: 100%;
    padding-bottom: 40px;
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
    // width: 90%;
    .row {
      display: flex;
      justify-content: space-between;
      padding-bottom: 3%;
      width: 100%;
      .img {
        position: relative;
        width: 32.5%;
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
    p{
      display: inline-block;
    }
    .zcool{
      width: 120px;
      margin-right: 25px;
      float: right;
      text-decoration: none;
      color: black;
    }
    a:hover,a:visited{
      text-decoration: revert;
    }
  }
  overflow: hidden;
}
</style>
