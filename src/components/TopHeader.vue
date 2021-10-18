<template>
  <div :class="['top-header', `style${theme}`]">
    <div class="content">
      <div class="left">
        <img class="btn logo" :src='logoUrl[theme-1]' alt="" @click="onClickLogo">
        <span class="btn" @click="onClickWorks">WORKS</span>
        <span class="btn" @click="onClickAbout">ABOUT</span>
      </div>
      <a class="right btn" href="mailto:sxldongman@163.com">CONTANT US</a>
    </div>
  </div>
</template>

<script>
// const icon = require("@img/")
export default {
    name: "TopHeader",
    props: {
      // 1: 黑字白底，2：白字黑底
      theme: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        logoUrl:[
          require('../../images/contact/logo.png'),
          require('../../images/works/logo.png'),
        ]
      }
    },
    methods: {
      onClickLogo() {
        console.log();
        this.$router.push('home')
      },
      // 点击作品
      onClickWorks() {
        console.log();
        this.$router.push('works')
      },
      // 点击关于
      onClickAbout() {
        this.$router.push('contact')
      }
    }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: flex-end;
}
.top-header {
  width: 100%;
  background-color: #000;
  padding:4% 4% 8%;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
  line-height: 200px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 100%;
    .flex();
    justify-content: space-between;
  }
  .left {
    width: 40%;
    justify-content: space-between;
    .flex();
  }
  .right {
     text-decoration:none;
     white-space: nowrap;
     margin: 0 !important;
     text-align: right;
  }
  .btn{
    color: white;
    line-height: 100%;
    cursor: pointer;
  }
  .logo{
    width: 120px;
  }
}
.style1{
  background-color: #fff;
  color: #000;
  .btn{
    color: #000;
  }
}
.style2{
  background-color: #000;
  color: #fff;
  .btn{
    color: #fff;
  }
}
</style>