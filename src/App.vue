<template>
<!--  <div class="head"></div>-->
  <div class="ym_bg">
    <div class="head"></div>
    <div class="ym_box">
      <div class="logo fd_l"> <img src="./assets/logo.png" alt="logo" style="top: 130px;width: 272px;height: 70px"> </div>
  <ul class="ym_nva fd_l" style="top: 110px">
    <li><a href="#" class="ys">首页</a></li>
    <li>
      <a href="#" class=''>二级学院</a>
      <ul>
<!--        <li><a href="#">计算机科学与技术学院</a></li>-->
        <!--              <li><a href="#">信息学院</a></li>-->
        <!--              <li><a href="#">文学与艺术学院</a></li>-->
        <!--              <li><a href="#">马克思主义学院</a></li>-->
        <!--              <li><a href="#">外国语学院</a></li>-->
      </ul>
    </li>
    <li><a href="javascript:;" class=''>优秀校友</a></li>
    <li><a href="javascript:;" class=''>师资信息</a></li>
    <li><a href="javascript:;" class=''>招生信息</a></li>
    <li><a href="javascript:;" class=''>科学研究</a></li>
    <li>
      <a href="javascript:;">社会服务</a>
      <ul>
<!--        <li><a href="#">123</a></li>-->
      </ul>
    </li>
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
          <swustmap></swustmap> //map
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

<!--  <el-container>-->
<!--    <HomePage style="width: 900px;height: auto"></HomePage>-->
<!--  </el-container>-->

</template>

<script>
import exp from 'constants';
import * as echarts from 'echarts'

import { defineComponent, onMounted ,nextTick} from 'vue';

import { RouterLink, RouterView } from 'vue-router'
import SwustMap from './components/SwustMap.vue';
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


//       // var map = new BMap.Map('map');
//       // var point = new BMap.Point(116.404, 39.915);
//       // map.centerAndZoom(point, 15);
//       // map.enableScrollWheelZoom(true);

// // 绘制面

//       var polygon = new BMap.Polygon([
//         // new BMap.Point(116.387112, 39.920977),
//         // new BMap.Point(116.385243, 39.913063),
//         // new BMap.Point(116.394226, 39.917988),
//         // new BMap.Point(116.401772, 39.921364),
//         // new BMap.Point(116.41248, 39.927893),
//         new BMap.Point(104.69687352604446,31.54723606342599),
//         new BMap.Point(104.69611894941607,31.5459743485647),
//         new BMap.Point(104.69687352604446,31.54458951974275),
//         new BMap.Point(104.69813115375842,31.545451193448496),
//         new BMap.Point(104.6991372559296,31.545851253509667),
//         new BMap.Point(104.69985590033758,31.54532809769666),
//         new BMap.Point(104.70014335810077,31.544435648592792),
//         new BMap.Point(104.70143691803514,31.54440487433206),
//         new BMap.Point(104.70244302020632,31.5442510028747),
//         new BMap.Point(104.70258674908791,31.544866487167123),
//         new BMap.Point(104.7032694612755,31.544958809457476),
//         new BMap.Point(104.70355691903869,31.546066669748388),
//         new BMap.Point(104.70506607229545,31.5458820272888),
//         new BMap.Point(104.71232438081607,31.545205001780886),
//         new BMap.Point(104.71225251637527,31.53809593453112),
//         new BMap.Point(104.71016844759212,31.536495549631038),
//         new BMap.Point(104.70887488765776,31.53634166500761),
//         new BMap.Point(104.7070423444174,31.536157003121396),
//         new BMap.Point(104.70506607229545,31.535449129140794),
//         new BMap.Point(104.70398810568348,31.5344642519782),
//         new BMap.Point(104.7029820035123,31.53320236278212),
//         new BMap.Point(104.70237115576552,31.531817342621473),
//         new BMap.Point(104.70096979916995,31.532556022622124),
//         new BMap.Point(104.6989216626072,31.53366403155891),
//         new BMap.Point(104.69744844157084,31.534218031048358),
//         new BMap.Point(104.69482538948171,31.537326522171607),
//         new BMap.Point(104.69234606627417,31.540588786591268),
//         new BMap.Point(104.69198674407018,31.54286614823108),
//         new BMap.Point(104.69058538747461,31.544497197083512),
//         new BMap.Point(104.6909087774582,31.54628208548502),
//         new BMap.Point(104.69187894740898,31.547789981582387),
//         new BMap.Point(104.6950409828041,31.548036166363953),
//         new BMap.Point(104.69687352604446,31.547389929),
//       ], {
//         strokeColor: 'blue',
//         strokeWeight: 5,
//         strokeOpacity: 0.7
//       });
//       map.addOverlay(polygon);


// // // 绘制线
// //       var polyline = new BMap.Polyline([
// //         new BMap.Point(116.399, 39.910),
// //         new BMap.Point(116.405, 39.920),
// //         new BMap.Point(116.423493, 39.907445)
// //       ], {
// //         strokeColor: 'blue',
// //         strokeWeight: 2,
// //         strokeOpacity: 0.5
// //       });
// //       map.addOverlay(polyline);
// // 绘制圆
// //       var circle = new BMap.Circle(new BMap.Point(104.695562,31.54202), 5000, {
// //         strokeColor: 'blue',
// //         strokeWeight: 2,
// //         strokeOpacity: 0.5
// //       });
// //       map.addOverlay(circle);

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
  color: white;
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
