<template>
  <div
    class="work-item"
    :key="`gif${gifIndex}`"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @click="() => {onClickWork(gif.zcoolUrl)}"
  >
    <div>
      <div v-if="!loadResult" :style="{'margin-top': `${100 * 655 / 1166}%`}"></div>
      <img v-show="loadResult" :src="gif.card" alt lazyload="on" @load="onLoad"/>
      <img
        v-if="isHover || isLoadHoverImg"
        :class="['hover', {show: playAnim}]"
        :src="gif.hover"
      />
    </div>
    <p class="title">{{gif.title}}</p>
    <p class="des">{{gif.des}}</p>
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  props: {
    gif: {
      type: Object,
      default: () => ({})
    },
    gifIndex: {
      type: Number,
      default: 0
    },
    hoverIndex: {
      type: String,
      default: ""
    },
    rowIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loadResult: false,
      isHover: false,
      playAnim: false
    }
  },
  methods: {
    onLoad() {
      this.loadResult = true;
    },
    onClickWork(url) {
      window.open(url, "_blank");
    },
    onMouseenter() {
      this.isHover = true;
      this.isLoadHoverImg = true;
      
      setTimeout(() => {
        this.playAnim = true;
      }, 0);
    },
    onMouseleave() {
      this.isHover = false;
      this.playAnim = false;
    }
  }
}
</script>

<style lang='less' scoped>
.work-item {
  position: relative;
  width: 32.5%;
  cursor: pointer;
  img {
    width: 100%;
  }
  .hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 500ms ease-out;
    &.show {
      opacity: 1;
    }
  }
  p {
    text-align: left;
  }
  .title {
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .des {
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
    line-height: 0px;
    color: #9b9b9b;
  }
}
</style>