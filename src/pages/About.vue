<template>
  <div>
    <TopHeader :theme="1"></TopHeader>
    <div class="continar">
      <div class="text">
        <p class="title">SOYA STUDIO</p>
        <p class="desp">索亚工作室® 2018年成立于深圳，是以动态产品广告为核心业务的创意设计机构。<br/><br/>
          索亚为客户提供产品广告、动态设计、三维设计、创意效果图等数字影像创意服务及技术支持。在过去的几年间，为全国众多企业制作了高效且精准的产品广告，并成为数码3C行业内备受认可的广告视频创作品牌。</p>
      </div>
      <div class="text">
        <p class="title">FOUNDERS</p>
        <p class="desp">杨帆，在工业设计领域具有丰富的产品设计经验，对产品有独到见解，深谙用户喜好；其出色的视频创意及独特的设计风格屡获行业认可。<br/><br/>
          余刘维，擅长数字三维动画及后期包装，品牌项目经验丰富，能快速切中产品宣传要点，同时具备优秀的项目管理能力，负责把控进度 。</p>
      </div>
      <div class="text infotext">
        <p class="title">INFORMATION</p>
        <div class="desp infodesp">
          <p class="info">深圳市 宝安区<br/>
                          泰华梧桐聚落花园<br/>
                          8栋 503号</p>
          <p class="info en">yangfan@soyastudio.net<br/>
                          186 3389 7990</p>
          <p class="info en">Nanshan, Shenzhen<br/>
                          Excellent Group<br/>
                          Qianhai No.1<br/>
                          Tower A #2802</p>
          <div class="info rect en">
            <p class="">www.soyastudio.net</p>
            <p class="address">
              <a class="zcool" target="_blank" href="https://www.zcool.com.cn/u/15601279">Zcool</a>
              <a class="zcool" target="_blank" href="https://www.behance.net/studiosoya">Behance</a>
            </p>
          </div>
        </div>
        <img class="QRcode" src="../assets/images/about/QRcode.png" alt="">
      </div>
      <img src="../assets/images/about/other-logos.png" alt="" class="com-logos">
      <Footer class="miit" color="black"></Footer>
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import Footer from '../components/Footer.vue';
export default {
  name: "About",
  components:{
    TopHeader,
    Footer
  }
}
</script>

<style lang="less" scoped>
.continar{
  color: #000;
  margin: 50px 19% 146px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 20px;
  overflow: hidden;
  
  .text{
    display: flex;
    align-items: flex-start;
    margin-bottom: 45px;
    .title{
      font-family: 'Montserrat';
      font-weight: 500;
      min-width: 24%;
      width: 24%;
      text-align: left;
      vertical-align: top;
    }
    .desp{
      text-align: left;
    }
  }
  
  .infotext{
    width: 100%;
    .infodesp{
      display: flex;
      flex-wrap: wrap;
      max-width: 596px;
      .en {
        font-family: 'Montserrat';
        font-weight: 400;
      }
      .info{
        min-width: 290px;
        margin-bottom: 52px;
        .address {
          .zcool{
            display: inline-block;
            min-width: 130px;
            text-decoration:none;
            color: black;
          }
          a:hover,a:visited{
            text-decoration: revert;
          }
        }
      }
      .rect{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .QRcode{
      float: right;
      width: 200px;
      margin-left: 20px;
    }
  }
  .com-logos{
    width: 100%;
    margin:40px 0 14%;
  }
  .miit {
    margin-bottom: 75px;
    text-align: left;
  }
}
</style>