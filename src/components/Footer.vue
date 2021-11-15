<template>
  <div class="footer-content">COPYRIGHT © 2021 SOYA STUDIO. ALL RIGHTS RESERVED. <a :style="{color: color}" href="https://beian.miit.gov.cn/">粤ICP备2021146369号-1</a></div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    color: {
      type: String,
      default: "white"
    }
  }
}
</script>

<style lang="less" scoped>
.footer-content {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  a {
    text-decoration: none;
  }
}
</style>