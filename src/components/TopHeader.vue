<template>
  <div :class="['top-header', `style${theme}`]">
    <div class="content">
      <div class="logo">
        <router-link to="home">
          <img class="btn" :src='logoUrl[theme-1]' alt="">
        </router-link>
      </div>
      <p class="works"><router-link to="works" class="btn">WORKS</router-link></p>
      <p class="about"><router-link to="about" class="btn">ABOUT</router-link></p>
      <a class="contant btn" href="mailto:yangfan@soyastudio.net">CONTANT US</a>
      <!-- <div class="link-container">
        <p class="work-container"><router-link to="works" class="btn">WORKS</router-link></p>
        <p class="about-container"><router-link to="about" class="btn">ABOUT</router-link></p>
        <a class="contant btn" href="mailto:yangfan@soyastudio.net">CONTANT US</a>
      </div> -->
    </div>
  </div>
</template>

<script>
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
          require('../assets/images/about/logo.png'),
          require('../assets/images/works/logo.png'),
        ]
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
  font-family: 'Montserrat';
  line-height: 200px;
  font-size: 20px;
  font-weight: bold;
  background-color: #000;
  padding: 4% 0 3%;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  &.style1 {
    border-bottom-color: #000;
  }
  &.style2 {
    border-bottom-color: #fff;
  }
  .content {
    width: 100%;
    justify-content: flex-start;
    .flex();
    .btn {
      line-height: 100%;
      cursor: pointer;
      text-decoration:none;
      &:hover {
        text-decoration: underline;
      }
    }
    .logo{
      width: 15%;
      min-width: 15%;
      margin-left: 4%;
      &, & > * {
        display: inline-flex;
      }
      img {
        width: 120px;
      }
    }
    .works, .about {
      display: inline-flex;
      width: 15.1%;
    }
    .contant {
      position: absolute;
      right: 4.9%;
    }
    // .link-container {
    //   // display: flex;
    //   // justify-content: space-between;
    //   display: inline-flex;
    //   width: 100%;
    //   .work-container {
    //     width: 18.9%;
    //   }
    //   p {
    //     display: inline-flex;
    //   }
    //   .contant {
    //     position: absolute;
    //     right: 4.8%;
    //     text-decoration: none;
    //     white-space: nowrap;
    //     margin: 0 !important;
    //     // text-align: right;
    //   }
    // }
  }
  .left {
    width: 40%;
    justify-content: space-between;
    .flex();
  }
}
.style1 {
  background-color: #fff;
  .btn{
    color: #000;
  }
}
.style2{
  background-color: #000;
  .btn{
    color: #fff;
  }
}
</style>