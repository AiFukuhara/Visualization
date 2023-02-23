<template>
  <!--  <div class="head"></div>-->
    <div class="ym_bg">
      <div class="head"></div>
      <div class="ym_box">
        <div class="logo fd_l"> <img src="src/assets/logo.png" alt="logo" style="top: 130px;width: 272px;height: 70px"> </div>
    <ul class="ym_nva fd_l" style="top: 110px">
      <li><a href="#" class="ys">首页</a></li>
      <li>
        <!-- <a href="#" class=''>二级学院</a> -->
        <router-link to="about">二级学院</router-link>
        <ul>
  <!--        <li><a href="#">计算机科学与技术学院</a></li>-->
          <!--              <li><a href="#">信息学院</a></li>-->
          <!--              <li><a href="#">文学与艺术学院</a></li>-->
          <!--              <li><a href="#">马克思主义学院</a></li>-->
          <!--              <li><a href="#">外国语学院</a></li>-->
        </ul>
      </li>
      <li><router-link to="famous">知名校友</router-link></li>
<!--      <li><a href="javascript:;" class=''>师资信息</a></li>-->
      <li><router-link to="zhaosheng">招生信息</router-link></li>
      <li><router-link to="science">科学研究</router-link></li>
<!--      <li>-->
<!--        <a href="javascript:;">社会服务</a>-->
<!--        <ul>-->
<!--  &lt;!&ndash;        <li><a href="#">123</a></li>&ndash;&gt;-->
<!--        </ul>-->
<!--      </li>-->
      <!--        <div class="clearfix"></div>-->
    </ul>
      </div>
    </div>
  
  <!--  <el-container>-->
  <!--      <SectorBenke style="left: 0px;top: 0px;height: 500px;width: 900px"></SectorBenke>-->
  <!--  </el-container>-->
  
    <el-container style="top: 200px;left: 0px;width: 1000px">
  
      <el-header style="height: 500px;left: 0px">
        <el-container style="left: 0px;width: 1400px">
          <el-aside width="800px" style="left: 0px;top: 20px;height: 500px">
            <swustmap></swustmap>
          </el-aside>
  
          <el-main style="left: 0px;height: 520px">
            <ZouMaDeng></ZouMaDeng>
          </el-main>
        </el-container>
      </el-header>
      <el-main style="top: 60px">
        <HomePage></HomePage>
      </el-main>
    </el-container>
  
  
  </template>
  
  <script>
  import exp from 'constants';
  import * as echarts from 'echarts'
  
  import { defineComponent, onMounted ,nextTick} from 'vue';
  
  import { RouterLink, RouterView } from 'vue-router'
  import SwustMap from '../components/SwustMap.vue';
  import SectorBenke from "@/components/SectorBenke.vue";
  import HomePage from "@/components/HomePage.vue";
  import Menu from "@/components/Menu.vue";
  import ZouMaDeng from "@/components/ZouMaDeng.vue";
  
  //104.70291013907156,31.540988948821173
  // export default defineComponent({
  //   props: {
  //     // 传入需要定位的经纬度
  //     latitude: {
  //       type: Number,
  //       default: () => {
  //         return 31.540988948821173
  //       },
  //     },
  //     longitude: {
  //       type: Number,
  //       default: () => {
  //         return 104.70291013907156
  //       },
  //     },
  //     width: {
  //       type: Number,
  //       default: 900,
  //     },
  //     height: {
  //       type: Number,
  //       default: 650,
  //     },
  //     isShow:{
  //       default:true,
  //     }
  //   },
  
  //   setup(props, { emit }) {
  //     const BMap = (window as any).BMap
  
  //     onMounted(() => {
  //       var map = new BMap.Map('map')
  //       var point = new BMap.Point(props.longitude, props.latitude,props.isShow)
  //       //   var point = new BMap.Point(116.46, 39.92)
  //       console.log(props.latitude)
  //       console.log(props.longitude)
  //       //   console.log(point)
  
  //       map.centerAndZoom(point, 16)
  //       map.enableScrollWheelZoom(true)
  
  //       map.addEventListener('click', function (e: any) {
  //         //   let a = JSON.parse(e)
  //         console.log('点击的经纬度：' + e.point.lng + ',' + e.point.lat) //
  //         emit('update:longitude', e.point.lng)
  //         emit('update:latitude', e.point.lat)
  //       })
  
  //       // var point = new BMap.Point(104.71079726144916,31.53772669852304);
  //       var marker = new BMap.Marker(point);        // 创建标注
  //       map.addOverlay(marker);
  
  //       var sContent = `<h4 style='margin:0 0 5px 0;'>科技之光</h4>
  //     <img style='float:right;margin:0 4px 22px' id='imgDemo' src='./assets/swust_01.png' width='139' height='104'/>
  //     <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
  //         西南科技大学科技之光广场是本校的地标性建筑之一其雕塑上由0和1的计算机语言、钉子以及齿轮组成，
  //     象征计算机学院与制造学院的光辉历程。本产品雕塑为金属材质，底座为亚克力板，外罩为透明亚克力材料，
  //     可作为摆件镇纸作用，造型简洁，具有很强的收藏纪念意义。
  //         21世纪是信息时代主导的全新时代，基于计算机技术的信息化、网络化、现代化、智能化广泛应用于社会各个行业，
  //     计算机成为了日常生产与生活、管理、娱乐、科研等的主要工具。而计算机的工作原理是基于二进制的以数字1和0代表的代码进行的。
  //     所以，西南科技大学校园内的科技之光广场上的标志性景观雕塑就是代表：科技、信息人才培养及时代标志的视觉景观雕塑。
  //     </p></div>`;
  //       var infoWindow = new BMap.InfoWindow(sContent);
  //       marker.addEventListener("click", function(){
  //         this.openInfoWindow(infoWindow);
  //         // 图片加载完毕重绘infoWindow
  //         document.getElementById('imgDemo').onload = function () {
  //           infoWindow.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
  //         };
  //         //alert("您点击了标注");
  //       });
  
  export default{
    components:{
      ZouMaDeng,
      Menu,
      HomePage,
      SectorBenke,
      'swustmap':SwustMap
    }
  }
  
  </script>
  
  <style scoped>
  /*body{*/
  /*  background: url("./assets/mainbackground.png");*/
  /*}*/
  .logo fd_l{
    text-align:center;
    color:red;
  }
  
  /*ul{*/
  /*  display: block;*/
  /*}*/
  
  #sector{
    background-color: #009DDC;
    margin-bottom: 0px;
    width: 100%;
    overflow: scroll;
    text-align: left;
    color: white;
    left: 0px;
    top:0px;
  
  }
  
  #table1{
    background-color: #009DDC;
    margin-bottom: 0px;
    width: 100%;
    overflow: scroll;
    text-align: left;
    color: white;
    left: 0px;
    top:0px;
  }
  
  #table2{
    background-color: #009DDC;
    margin-bottom: 0px;
    width: 100%;
    overflow: scroll;
    text-align: left;
    color: rgba(255, 255, 255, 0.92);
    left: 0px;
    top:0px;
  }
  html{
    width:100%;
    height:100%;
  }
  body{
    background:url("~@/./assets/head.png");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
  }
  /*template{background: url(./assets/mainbackground.png);background-repeat: repeat-y}*/
  
  
  /*@charset "utf-8";*/
  /* CSS Document */
  
  *{margin: 0;padding: 0;font-family: "微软雅黑";list-style: none;text-decoration: none;}
  h1,h2,h3,h4,h5,h6{font-weight: normal;}
  .clearfix{clear: both;}
  .fd_l{float: left;}
  .fd_r{float: right;}
  /*过渡*/
  .ym_nva li a,.sj,.ym_ss span,.yuan span,.yuan,.imgb,.imgh,.yw_list h4,.about_nr a,.case_nr,.case_nr_dt,.gd,.news_t span,.news_list li,.yq dt a,.yj_list dl dt a,.dq dl dd a,.zx_list dt a,.nva_list dt a,.yw_ span,.yw_ h2,.an input,.an dt a,.about h3 a,.case ul li p,.case_t span,.xw h3 a,.xw h2 a,.xw h4 a,.contact_box input[type=submit]{transition: all 0.3s;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;}
  
  .bj,.bj_dt{transition: all 0.6s;-webkit-transition: all 0.5s;-moz-transition: all 0.5s;-ms-transition: all 0.5s;}
  /*页眉*/
  .head{
    background-color: rgb(255, 208, 0);
    background-image: url("src/assets/headback.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    padding: 0px;
    width: 150%;
    height: 130px;
    top: 0;
    left: 0;
  }
  
  .ym_bg{box-shadow: 0 2px 6px 0 rgba(0,0,0,0.44);background-color: #fff;position: fixed;width: 100%;z-index: 100;
    top:0px;
    left:0px;
    height: 200px;
  }
  .ym_box{width: 100vw;margin: 0 auto;background-color: #fff;}
  .logo{width: 267px;height: 30px;margin: 0px 0;}
  .logo img{width: 90%;height: 355%}
  .ym_nva{margin-left: 132px;}
  .ym_nva li{float: left;padding: 41px 0;margin: 0 15px;}
  .ym_nva li a{font-size: 15px;color: #666; padding-right: 12px;display: block;}
  .ym_nva li .ys{color: #cc3333;}
  .ym_nva li a:hover {color: #cc3333;}
  
  
  
  </style>
  