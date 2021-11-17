<template>
  <div class="works">
    <TopHeader :theme="2"></TopHeader>
    <div class="poster">
      <video src="../assets/media/show.mp4" muted autoplay loop="true"></video>
    </div>
    <div class="imgs">
      <div class="row" v-for="(gifArr, index) in gifConfig" :key="index">
        <template v-for="(gif, gifIndex) in gifArr">
          <WorkItem :gif="gif" 
            :gifIndex="gifIndex" 
            :rowIndex="index" 
            :key="`gif${gifIndex}`" 
          ></WorkItem>
        </template>
      </div>
    </div>
    <div class="footer">
      <Footer class="miit"></Footer>
      <div class="right">
        <a target="_blank" href="https://www.zcool.com.cn/u/15601279">Zcool</a>
        <a target="_blank" href="https://www.behance.net/studiosoya">Behance</a>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import Footer from '../components/Footer.vue';
import WorkItem from '../components/WorkItem.vue';
const OTHER_INFO = Object.freeze([
  {
    title: "小米® MIX4 动态数字影像",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTU0NjI2NjQ=.html"
  },
  {
    title: "iPhone 13 Ad 自制创意短片",
    des: "PRODUCT ANIMATION & CREATIVE VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTUyMjQ2MTI=.html"
  },
  {
    title: "vivo® 2022 校招主视觉",
    des: "KEY VISUAL & CREATIVE VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTUwODc5MTI=.html"
  },
  {
    title: "Nubia® 红魔游戏手机6R短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTQ2NTA0NDA=.html"
  },
  {
    title: "2021 小米® 春季新品数字影像",
    des: "PRODUCT ANIMATION & RENDERTING",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTQzMDQ1NjA=.html"
  },
  {
    title: "JMGO® 投影仪创意开机动画",
    des: "CREATIVE VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTQwMjAzNjg=.html"
  },
  {
    title: "ZMI® PurPods Pro 耳机短片",
    des: "PRODUCT VIDEO & CHARACTER ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTM3MTk0MDg=.html"
  },
  {
    title: "Nubia® Z30 Pro 广告短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTM1NjMxNjg=.html"
  },
  {
    title: "JMGO® O1 坚果智慧墙短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTI2MTE2MDg=.html"
  },
  {
    title: "BLACKSHARK® 蓝牙游戏耳机2短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTE3NDY3MzY=.html"
  },
  {
    title: "Lofree® 桌面风扇创意短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTA1MDI2MjQ=.html"
  },
  {
    title: "Leader® iCase 智能冰箱创意短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNTAyNDUyMTY=.html"
  },
  {
    title: "我回零零年代 - 怀旧创意短片",
    des: "CREATIVE VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDk0MTYxMjg=.html"
  },
  {
    title: "BULL® 公牛电竞移动电源短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDg2MTQ4NDQ=.html"
  },
  {
    title: "居骑士® S1 Pro 声波电动牙刷短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDgyNTcyOTI=.html"
  },
  {
    title: "Nubia® 红魔 5S 手机及智能生态新品",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDY2MDQwODg=.html"
  },
  {
    title: "AUKEY® WEAR BUDS 智能手环短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDQwNjg4ODQ=.html"
  },
  {
    title: "猫王® 小王子 OTR 效果图渲染",
    des: "RENDERING",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDM3ODc1NzY=.html"
  },
  {
    title: "C60® 工业设计公司展会宣传短片",
    des: "PROMOTIONAL VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDM2MzU0Mjg=.html"
  },
  {
    title: "ZMI® 紫米蓝牙闹钟音箱短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDM2MzQyNDA=.html"
  },
  {
    title: "COOLPAD® 26周年臻藏手机渲染",
    des: "RENDERING",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDMyNDc5Njg=.html"
  },
  {
    title: "ZMI® 米家生态链展会产品宣传短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDA1MTg0Njg=.html"
  },
  {
    title: "ZMI® 移动电源短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDAxNTQzMjQ=.html"
  },
  {
    title: "JMGO® T9 便携投影仪短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZNDAwOTE0MzY=.html"
  },
  {
    title: "CIGA® 玺佳全透明机械表短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzk2MzEyODQ=.html"
  },
  {
    title: "ZOMO® & Logitech® 定制键帽短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzk2MDM1NDg=.html"
  },
  {
    title: "EDIFIER® 漫步者 HECATE 耳机短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzQ4NDY0MjA=.html"
  },
  {
    title: "SOYA STUDIO® 2018 案例汇总",
    des: "PRODUCT ANIMATION & CREATIVE VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzM1Mjc3NjQ=.html"
  },
  {
    title: "Happy Dino® 小龙哈彼婴童产品短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzM0OTUyMDQ=.html"
  },
  {
    title: "聚宝硬币罐 - 创意短片",
    des: "CREATIVE VIDEO",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzM0Nzc1NjA=.html"
  },
  {
    title: "娇棠® 超声波导入仪短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzIyNzIzMjQ=.html"
  },
  {
    title: "JMGO® U1 投影仪短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzE3MzE1MDA=.html"
  },
  {
    title: "ZOMO® 全金属键帽短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzAyODQyMzI=.html"
  },
  {
    title: "JMGO® W700 投影仪短片",
    des: "PRODUCT ANIMATION",
    zcoolUrl: "https://www.zcool.com.cn/work/ZMzAyNzY0NDg=.html"
  }
]);

export default {
  name: "Works",
  components: {
    TopHeader,
    Footer,
    WorkItem
  },
  props: {
    msg: String
  },
  data() {
    return {
      imgCount: Number,
      imagesNameArr: Array,
      gifConfig: [],
      itemHeight: 0,
      OTHER_INFO
    };
  },
  methods: {
    onClickWork(url) {
      window.open(url, "_blank");
    }
  },
  created() {
    const gifContext = require.context("../assets/images/works/gif", false);
    const imgContext = require.context("../assets/images/works/card", false);
    const keys = imgContext.keys();
    const result = gifContext.keys().map((item, index) => {
      let otherInfo = this.OTHER_INFO[index];
      return {
        ...otherInfo,
        card: require("../assets/images/works/card/" + keys[index].split("/")[1]),
        hover: require("../assets/images/works/gif/" + item.split("/")[1]),
      };
    });

    //按照一行3个整理数据
    const gitConfig = [];
    let pos = 0;
    let len = result.length;
    while (pos < len) {
      const arr = result.slice(pos, pos + 3);
      gitConfig.push([...arr]);
      pos += 3;
    }
    this.gifConfig = Object.freeze(Object.freeze(gitConfig));
  },
};
</script>

<style lang="less" scoped>
.works {
  color: #fff;
  background-color: #000000;
  .poster {
    background-color: #000000;
    width: 100%;
    // padding-bottom: 6%;
    video {
      width: 100%;
    }
  }
  .imgs {
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
    }
    
  }
  .footer {
    font-family: "Montserrat";
    text-align: left;
    margin: 0 4% 4%;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    p {
      display: inline-block;
    }
    .right {
      width: 32.5%;
      a {
        width: 120px;
        margin-right: 25px;
        text-decoration: none;
        color: white;
        &:nth-child(1) {
          margin-right: 16%;
        }
      }
      a:hover,
      a:visited {
        text-decoration: revert;
      }
    }
  }
  overflow: hidden;
}
</style>
