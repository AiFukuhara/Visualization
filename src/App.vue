<template>
  <!--页眉-->
  <div style="width: 100%;height: 100%">
    <div class="ym_bg">
      <div class="ym_box">
<!--      <div class="logo fd_l"> 西南科技大学 </div>-->
      <ul class="ym_nva fd_l">
        <li><a href="src/views/AboutView.vue" class="ys">首页</a></li>
        <li><a href="javascript:;" class=''>二级学院</a>
        </li><li><a href="javascript:;" class=''>优秀校友</a>
      </li><li><a href="javascript:;" class=''>师资信息</a>

      </li><li><a href="javascript:;" class=''>招生信息</a>

      </li><li><a href="javascript:;" class=''>科学研究</a>

      </li><li><a href="javascript:;" class=''>社会服务</a>

      </li>
<!--        <div class="clearfix"></div>-->
      </ul>
<!--      <div class="clearfix"></div>-->
      </div>
    </div>
    <!-- <SwustMap></SwustMap> -->
    <swustmap :style="{width:'1000px',height:'1000px'}"></swustmap>
  </div>
  
  <!--banner-->
<!--  <div class="banner">-->
<!--    <ul>-->
<!--      <li><a href="javascript:;"><img src="./assets/1-1P5141G119449.png"></a></li><li><a href="javascript:;"><img src="./assets/1-1P5141G021L0.png"></a></li>-->
<!--    </ul>-->
<!--  </div>-->

  <!--主营业务-->
<!--  <div class="yw_box">-->
<!--    <h2><span>产品展示</span></h2>-->
<!--    <h3></h3>-->
<!--    <ul class="yw_list">-->

<!--      <li><a href="javascript:;">-->
<!--        <div class="yuan"><span><img src="./assets/tb1.png" class="imgh"><img src="./assets/tb1-1.png" class="imgb"></span></div>-->
<!--        <h4>第一系列</h4>-->
<!--        <p></p>-->
<!--      </a></li>-->

<!--      <li><a href="javascript:;">-->
<!--        <div class="yuan"><span><img src="./assets/tb2.png" class="imgh"><img src="./assets/tb2-1.png" class="imgb"></span></div>-->
<!--        <h4>第二系列</h4>-->
<!--        <p></p>-->
<!--      </a></li>-->

<!--      <li><a href="javascript:;">-->
<!--        <div class="yuan"><span><img src="./assets/tb3.png" class="imgh"><img src="./assets/tb3-1.png" class="imgb"></span></div>-->
<!--        <h4>第三系列</h4>-->
<!--        <p></p>-->
<!--      </a></li>-->

<!--      <li><a href="javascript:;">-->
<!--        <div class="yuan"><span><img src="./assets/tb4.png" class="imgh"><img src="./assets/tb4-1.png" class="imgb"></span></div>-->
<!--        <h4>第四系列</h4>-->
<!--        <p></p>-->
<!--      </a></li>-->

<!--      <div class="clearfix"></div>-->
<!--    </ul>-->
<!--  </div>-->
<!--  &lt;!&ndash;关于我们&ndash;&gt;-->
<!--  <div class="about_bg">-->
<!--    <div class="about_bj">-->
<!--      <div class="about_box">-->
<!--        <div class="about_tu"> <img src="./assets/1-1P5141H951K2.png"> </div>-->
<!--        <div class="about_nr">-->
<!--          <h2>关于我们</h2>-->
<!--          <h3></h3>-->
<!--          <div style="height:210px; overflow:hidden;">-->
<!--            <p> 广东某某机电制造有限公司成立于2003年，位于广东省广州市，占地面积约10亩，厂房面积约3500平方米，拥有卷板机、剪板机、折边机、埋弧自动焊机、CO2气体保护焊机、氩弧焊机、车床、摇臂钻床、自动调心翻转架等先进机械生产加工设备，目前最大起重能力为25吨，设计最大起重能力为36吨，是以铝融解炉，环保设备、水处理设备制造安装为主，其他化工配套设备，管道制造安装为辅的新兴企业，公司注册资本为300万元人民币，总资产约1000万元，现有职工180人，各类专业技术及管理人员19人。公司专业生产和安装各类碳钢，不锈钢、铝合金钛合金设备和管道，并承揽安装过程。 公司在生产过程中按ISO9001系列标准建立质量保证体系，抓实物形态 ... </p>-->
<!--          </div>-->
<!--          <a href="javascript:;"></a> </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <!--案例-->
<!--  <div class="case_bg">-->
<!--    <div class="case_box">-->
<!--      <div class="bt">-->
<!--        <h2>客户案例</h2>-->
<!--        <span></span></div>-->
<!--      <dl class="case_list">-->
<!--        <dt><a href="javascript:;"><img src="./assets/1-1P5150945000-L.jpg">-->
<!--          <div class="case_bj">-->
<!--            <div class="bj_dt"></div>-->
<!--            <div class="case_nr_dt">-->
<!--              <h3>案例展示八</h3>-->
<!--              <p>...</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a></dt>-->
<!--        <dt><a href="javascript:;"><img src="./assets/1-1P5150943360-L.jpg">-->
<!--          <div class="case_bj">-->
<!--            <div class="bj_dt"></div>-->
<!--            <div class="case_nr_dt">-->
<!--              <h3>案例展示七</h3>-->
<!--              <p>...</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a></dt>-->
<!--        <dt><a href="javascript:;"><img src="./assets/1-1P5150922510-L.jpg">-->
<!--          <div class="case_bj">-->
<!--            <div class="bj_dt"></div>-->
<!--            <div class="case_nr_dt">-->
<!--              <h3>案例展示六</h3>-->
<!--              <p>...</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a></dt>-->
<!--        <dt><a href="javascript:;"><img src="./assets/1-1P5150922280-L.jpg">-->
<!--          <div class="case_bj">-->
<!--            <div class="bj_dt"></div>-->
<!--            <div class="case_nr_dt">-->
<!--              <h3>案例展示五</h3>-->
<!--              <p>...</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a></dt>-->
<!--        <dt><a href="javascript:;"><img src="./assets/1-1P5150921300-L.jpg">-->
<!--          <div class="case_bj">-->
<!--            <div class="bj_dt"></div>-->
<!--            <div class="case_nr_dt">-->
<!--              <h3>案例展示四</h3>-->
<!--              <p>...</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a></dt>-->
<!--        <dt><a href="javascript:;"><img src="./assets/1-1P5150920360-L.jpg">-->
<!--          <div class="case_bj">-->
<!--            <div class="bj_dt"></div>-->
<!--            <div class="case_nr_dt">-->
<!--              <h3>案例展示三</h3>-->
<!--              <p>...</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a></dt>-->


<!--        <div class="clearfix"></div>-->
<!--      </dl>-->
<!--      <a href="javascript:;" class="gd"></a> </div>-->
<!--  </div>-->
  <!--最新资讯-->
<!--  <div class="news_box">-->
<!--    <div class="bt">-->
<!--      <h2>新闻资讯</h2>-->
<!--      <span></span></div>-->
<!--    <ul class="news_list">-->
<!--      <li><a href="javascript:;">-->
<!--        <div class="news_t"><img src="./assets/1-1P515095J80-L.jpg"><span></span></div>-->
<!--        <div class="news_bt">-->
<!--          <h3>腾讯游戏营收比重连续两个季度下降，支付、云计算等业务营收</h3>-->
<!--          <span>2018-05-15</span>-->
<!--          <p>腾讯不仅在阿里怂恿大家花钱的双十一之际高调派钱，如今财报的高速增长业务也刚好跟支付...</p>-->
<!--        </div>-->
<!--      </a></li>-->
<!--      <li><a href="javascript:;">-->
<!--        <div class="news_t"><img src="./assets/1526349444986288-lp.jpg"><span></span></div>-->
<!--        <div class="news_bt">-->
<!--          <h3>获 3800 万元 A+ 轮投资，乐摇摇科技利用抓娃娃机做线下版的广点</h3>-->
<!--          <span>2018-05-15</span>-->
<!--          <p>36氪获悉，线下公众号推广公司乐摇摇科技已完成 3800 万元 A+ 轮融资，投资方为广发信德。 众...</p>-->
<!--        </div>-->
<!--      </a></li>-->
<!--      <li><a href="javascript:;">-->
<!--        <div class="news_t"><img src="./assets/1-1P515095A50-L.jpg"><span></span></div>-->
<!--        <div class="news_bt">-->
<!--          <h3>借网生大势赚了两年快钱后，考拉娱乐开始切入女性人群做点“</h3>-->
<!--          <span>2018-05-15</span>-->
<!--          <p>从2014年起，网络大电影这个词逐渐进入人们的眼球，当时满地都是几十万制作成本博得百万票...</p>-->
<!--        </div>-->
<!--      </a></li>-->
<!--      <li><a href="javascript:;">-->
<!--        <div class="news_t"><img src="./assets/1-1P5150956190-L.jpg"><span></span></div>-->
<!--        <div class="news_bt">-->
<!--          <h3>传滴滴即将接入ofo，共享单车大战格局或生变</h3>-->
<!--          <span>2018-05-15</span>-->
<!--          <p>36氪从ofo内部获得消息，可能在今年4月份，ofo将会接入到滴滴出行的App上，届时用户可以直接...</p>-->
<!--        </div>-->
<!--      </a></li>-->

<!--      <div class="clearfix"></div>-->
<!--    </ul>-->
<!--    <a href="javascript:;" class="gd"></a></div>-->
  <!--友情链接-->
<!--  <dl class="yq">-->
<!--    <dd>友情链接</dd>-->
<!--    <span></span>-->
<!--    <dt><a href='javascript:;' target='_blank'>代码库CMS</a> </dt><dt><a href='javascript:;' target='_blank'>百度</a> </dt><dt><a href='javascript:;' target='_blank'>新浪</a> </dt><dt><a href='javascript:;' target='_blank'>搜狐</a> </dt><dt><a href='javascript:;' target='_blank'>网易</a> </dt><dt><a href='javascript:;' target='_blank'>代码库模板</a> </dt><dt><a href='javascript:;' target='_blank'>代码库教程</a> </dt><dt><a href='javascript:;' target='_blank'>虚拟主机</a> </dt><dt><a href='javascript:;' target='_blank'>代码库</a> </dt>-->
<!--    <div class="clearfix"></div>-->
<!--  </dl>-->
  <!--页脚-->
<!--  <div class="yj_bg">-->
<!--    <div class="yj_box">-->
<!--      <div class="yj_fw">-->
<!--        <h2>服务热线：<span>0896-8734688834</span></h2>-->
<!--        <h3>地址：<span>这里是您的公司地址</span></h3>-->
<!--      </div>-->
<!--      <div class="yj_list">-->
<!--        <dl>-->
<!--          <dd>关于我们</dd>-->

<!--          <dt><a href="javascript:;" title="发展历史">发展历史</a></dt>-->

<!--          <dt><a href="javascript:;" title="企业文化">企业文化</a></dt>-->

<!--        </dl><dl>-->
<!--        <dd>产品展示</dd>-->

<!--        <dt><a href="javascript:;" title="第一系列">第一系列</a></dt>-->

<!--        <dt><a href="javascript:;" title="第二系列">第二系列</a></dt>-->

<!--        <dt><a href="javascript:;" title="第三系列">第三系列</a></dt>-->

<!--        <dt><a href="javascript:;" title="第四系列">第四系列</a></dt>-->

<!--        <dt><a href="javascript:;" title="第五系列">第五系列</a></dt>-->

<!--        <dt><a href="javascript:;" title="第六系列">第六系列</a></dt>-->

<!--      </dl><dl>-->
<!--        <dd>新闻资讯</dd>-->

<!--        <dt><a href="javascript:;" title="公司动态">公司动态</a></dt>-->

<!--        <dt><a href="javascript:;" title="行业新闻">行业新闻</a></dt>-->

<!--      </dl><dl>-->
<!--        <dd>客户案例</dd>-->

<!--        <dt><a href="javascript:;" title="最新案例">最新案例</a></dt>-->

<!--        <dt><a href="javascript:;" title="经典案例">经典案例</a></dt>-->

<!--      </dl><dl>-->
<!--        <dd>人才招聘</dd>-->

<!--      </dl>-->
<!--        <dl>-->
<!--          <dd>联系我们</dd>-->
<!--          <div class="yj_lx">-->
<!--            <div class="lx_z">-->
<!--              <dt>电话：<span>0896-8734688834</span></dt>-->
<!--              <dt>手机：<span>13866668888</span></dt>-->
<!--              <dt>邮箱：<span><a href="javascript:;" class="__cf_email__" data-cfemail="">[email&#160;protected]</a></span></dt>-->
<!--              <dt>传真：<span>0896-8734688834</span></dt>-->
<!--              <dt class="js">技术支持：<a href="javascript:;">代码库网络</a></dt>-->
<!--            </div>-->
<!--            <div class="gz"><img src="./assets/ewm.png">-->
<!--              <p>关注我们</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </dl>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="dibu">Copyright ? 2006-2014 dmakucms.com <a href="javascript:;" target="_blank">Power by dmakuCms</a></div>-->
<!--  <div class="zaix_box">-->
<!--    <ul>-->
<!--      <li style="border-top: 1px solid #dedede;"><img src="./assets/zx_kf_03.png" alt="QQ" width="18" height="18"><img src="./assets/zx_kf_03-1.png" alt="QQ" width="18" height="18">-->
<!--        <p>在线客服</p>-->
<!--        <div class="ziji">-->
<!--          <div class="xf"><span>在线QQ</span><a href="javascript:;" target="_blank">点击咨询</a><img src="./assets/zx.png"  class="ziji123"></div>-->
<!--        </div>-->
<!--      </li>-->
<!--      <li><img src="./assets/zx_kf_06.png" alt="客服" width="18" height="18"><img src="./assets/zx_kf_06-2.png" alt="客服" width="18" height="18">-->
<!--        <p>电话咨询</p>-->
<!--        <div class="ziji">-->
<!--          <div class="xf"><span>电话号码</span><a href="javascript:;">0896-8734688834</a><img src="./assets/zx.png"  class="ziji123"></div>-->
<!--        </div>-->
<!--      </li>-->
<!--      <li><img src="./assets/zx_kf_08.png" alt="客服" width="18" height="18"><img src="./assets/zx_kf_08-1.png" alt="客服" width="18" height="18">-->
<!--        <div class="ziji">-->
<!--          <div class="xf"><span>关注我们</span><b><img src="./assets/ewm.png"></b><img src="./assets/zx.png"  class="ziji123"></div>-->
<!--        </div>-->
<!--        <p>官方微信</p>-->
<!--      </li>-->
<!--      <li id="top"><img src="./assets/zx_kf_10.png" alt="客服" width="18" height="18"><img src="./assets/zx_kf_10-1.png" alt="客服" width="18" height="18">-->
<!--        <p>返回顶部</p>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->

<!--  <div id="sector"></div>-->


<!--  <div id="table1" :style="{ width: width + 'px', height: height + 'px' }"></div>-->

<!--  <div id="table2"></div>-->

  <!-- <div id="map"  :style="{ width: width + 'px', height: height + 'px' }"></div> -->
  

</template>

<script>

import exp from 'constants';
import * as echarts from 'echarts'

import { defineComponent, onMounted ,nextTick} from 'vue';

import { RouterLink, RouterView } from 'vue-router'
import SwustMap from './components/SwustMap.vue';
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

//       // function openEdit() {
//       //   polyline.enableEditing();
//       //   polygon.enableEditing();
//       //   circle.enableEditing();
//       // }
//       // function closeEdit() {
//       //   polygon.disableEditing();
//       //   polyline.disableEditing();
//       //   circle.disableEditing();
//       // }
//     })
//     // onMounted(()=>{
//     //   var myChart = echarts.init(document.getElementById('table1'));
//     //   var option;
//     //   option = {
//     //     xAxis: {
//     //       type: 'category',
//     //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     //     },
//     //     yAxis: {
//     //       type: 'value'
//     //     },
//     //     series: [
//     //       {
//     //         data: [150, 230, 224, 218, 135, 147, 260],
//     //         type: 'line'
//     //       }
//     //     ]
//     //   };
//     //   option && myChart.setOption(option);
//     // })

//     // onMounted(()=>{
//     //   var myChart = echarts.init(document.getElementById('table2'));
//     //
//     //   // 指定图表的配置项和数据
//     //   var option = {
//     //     title: {
//     //       text: '第一个 ECharts 实例'
//     //     },
//     //     tooltip: {},
//     //     legend: {
//     //       data:['销量']
//     //     },
//     //     xAxis: {
//     //       data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//     //     },
//     //     yAxis: {},
//     //     series: [{
//     //       name: '销量',
//     //       type: 'bar',
//     //       data: [5, 20, 36, 10, 10, 20]
//     //     }]
//     //   };
//     //
//     //   // 使用刚指定的配置项和数据显示图表。
//     //   myChart.setOption(option);
//     // })

//     // onMounted(()=>{
//     //   type EChartsOption = echarts.EChartsOption;
//     //
//     //   var chartDom = document.getElementById('sector')!;
//     //   var myChart = echarts.init(chartDom);
//     //   var option: EChartsOption;
//     //
//     //   var data = [
//     //     {
//     //       name: 'Grandpa',
//     //       children: [
//     //         {
//     //           name: 'Uncle Leo',
//     //           value: 15,
//     //           children: [
//     //             {
//     //               name: 'Cousin Jack',
//     //               value: 2
//     //             },
//     //             {
//     //               name: 'Cousin Mary',
//     //               value: 5,
//     //               children: [
//     //                 {
//     //                   name: 'Jackson',
//     //                   value: 2
//     //                 }
//     //               ]
//     //             },
//     //             {
//     //               name: 'Cousin Ben',
//     //               value: 4
//     //             }
//     //           ]
//     //         },
//     //         {
//     //           name: 'Aunt Jane',
//     //           children: [
//     //             {
//     //               name: 'Cousin Kate',
//     //               value: 4
//     //             }
//     //           ]
//     //         },
//     //         {
//     //           name: 'Father',
//     //           value: 10,
//     //           children: [
//     //             {
//     //               name: 'Me',
//     //               value: 5,
//     //               itemStyle: {
//     //                 color: 'red'
//     //               }
//     //             },
//     //             {
//     //               name: 'Brother Peter',
//     //               value: 1
//     //             }
//     //           ]
//     //         }
//     //       ]
//     //     },
//     //     {
//     //       name: 'Mike',
//     //       children: [
//     //         {
//     //           name: 'Uncle Dan',
//     //           children: [
//     //             {
//     //               name: 'Cousin Lucy',
//     //               value: 3
//     //             },
//     //             {
//     //               name: 'Cousin Luck',
//     //               value: 4,
//     //               children: [
//     //                 {
//     //                   name: 'Nephew',
//     //                   value: 2
//     //                 }
//     //               ]
//     //             }
//     //           ]
//     //         }
//     //       ]
//     //     },
//     //     {
//     //       name: 'Nancy',
//     //       children: [
//     //         {
//     //           name: 'Uncle Nike',
//     //           children: [
//     //             {
//     //               name: 'Cousin Betty',
//     //               value: 1
//     //             },
//     //             {
//     //               name: 'Cousin Jenny',
//     //               value: 2
//     //             }
//     //           ]
//     //         }
//     //       ]
//     //     }
//     //   ];
//     //
//     //   option = {
//     //     visualMap: {
//     //       type: 'continuous',
//     //       min: 0,
//     //       max: 10,
//     //       inRange: {
//     //         color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
//     //       }
//     //     },
//     //     series: {
//     //       type: 'sunburst',
//     //       data: data,
//     //       radius: [0, '90%'],
//     //       label: {
//     //         rotate: 'radial'
//     //       }
//     //     }
//     //   };
//     //
//     //   option && myChart.setOption(option);
//     // })
//   },
// })


// <script src="js/jquery-1.11.0.min.js" type="text/javascript">
// <script src="js/jquery.shey.js" type="text/javascript">
// <script type="text/javascript" src="js/jquery.tersebanner.min.js">
// onMounted(()=>{
//   var myChart = echarts.init(document.getElementById('main'));
//   var option;
//   option = {
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [
//       {
//         data: [150, 230, 224, 218, 135, 147, 260],
//         type: 'line'
//       }
//     ]
//   };
//   option && myChart.setOption(option);
// })
export default{
  components:{
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
  background:url("~@/./assets/mainbackground.png");
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
.ym_bg{box-shadow: 0 2px 6px 0 rgba(0,0,0,0.44);background-color: #fff;position: fixed;width: 100%;z-index: 100;
  top:30px;
  left:0px;
}
.ym_box{width: 100vw;margin: 0 auto;background-color: #fff;}
.logo{width: 267px;height: 58px;margin: 0px 0;}
.logo img{width: 100%;}
.ym_nva{margin-left: 132px;}
.ym_nva li{float: left;padding: 41px 0;margin: 0 15px;}
.sj{background: url(./assets/nva_11.png); background-position: right center;background-repeat: no-repeat;}
.ym_nva li a{font-size: 15px;color: #666; padding-right: 12px;display: block;}
.ym_nva li .ys{color: #cc3333;}
.ym_nva li .ys_{color: #cc3333;background: url(./assets/nva_11-1.png) no-repeat right center;}
.ym_nva li a:hover {color: #cc3333;}
.sj:hover {background: url(./assets/nva_11-1.png); background-position: right center;background-repeat: no-repeat;}
.ym_ss span,.ym_ss a{width: 24px;height: 24px;background-color: aqua; display: block;float: left;margin: 37px 0;margin-right: 19px;cursor: pointer;}
.ym_ss{position: relative;}
.ym_ss span{background: url(./assets/nva_06.png) no-repeat center;}
.sous{position: absolute;top: 0;margin-top: 104px;right: 0;background-color: #cc3333;display: flex;padding: 7px;margin-right: -56px}

.sous input,.ss{border: none;font-size: 14px;}
.sr{width: 252px;padding: 10px 8px;color: #999}
.ss{padding: 12px;background:url(./assets/nva_18.png) no-repeat center #fff;color: #fff;width: 49px;}
.ym_ss a{background: url(./assets/nva_08.png) no-repeat center;}
.ym_ss span:hover{background: url(./assets/nva_06-1.png) no-repeat center;}
.ym_ss a:hover{background: url(./assets/nva_08-1.png) no-repeat center;}
.ym_nva li{position: relative;}
.ym_nva li ul{position: absolute;background: #444;padding: 0;width: 120px;top: 0;margin-top: 104px;left: 50%;margin-left: -60px;text-align: center;}
.ym_nva li li{padding: 0;margin: 0;float: none;}
.ym_nva li li a{color: #fff;padding: 10px;border-bottom: 1px solid #565656;}
.ym_nva li li a:hover{background-color: #fff;color: #666;border-bottom: 1px solid #fff;}


/*banner*/
.banner{height: 600px;overflow: hidden;}
/*主营业务*/
.yw_box{width: 1200px;margin: 32px auto 0;}
.yw_box{background-image: url("./assets/swust_01.png");background-repeat: no-repeat}
.yw_box h2{font-size: 20px;color: #333;text-align: center;font-weight: bold;}
.yw_box h2 span{color: #cc3333;}
.yw_box h3{font-size: 14px;color: #999;text-align: center;margin-top: 10px;padding: 0 20px;}
.yw_list{margin-top: 24px;}
.yuan{
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid #666;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  display: -ms-flexbox;
  -ms-flex-pack: center;
  -ms-flex-align: center;
}
.yuan span{
  width: 124px;
  height: 124px;
  border-radius: 50%;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  -ms-flex-pack: center;
  -ms-flex-align: center;
  justify-content: center;
  align-items: center;
}
.yuan span img{width: 47px;height: 47px;}
.imgb{display: none;}
.yw_list h4{font-size: 14px;color: #333;text-align: center;}
.yw_list p{font-size: 13px;color: #666;text-align: center;line-height: 24px;margin-top: 16px;}
.yw_list li{float: left;width: 277px;margin-left: 30px;}
.yw_list li:nth-child(1){margin-left: 0}
.yw_list li:hover .yuan{border: 2px solid #cc3333;}
.yw_list li:hover .yuan span{background-color: #cc3333;transform: rotateY(-180deg)}
.yw_list li:hover .imgh{display: none;}
.yw_list li:hover .imgb{display: block;}
.yw_list li:hover h4{color: #cc3333}
/*关于我们*/
.about_bg{background: url(./assets/nva_06-1.png)no-repeat center;height: 420px;margin-top: 32px;position: relative;}
.about_bj{position: absolute;width: 100%;height: 100%;left: 0;background: rgba(0,0,0,0.73)}
.about_box{
  width: 1200px;
  margin: 0 auto;
  padding: 32px 27px 32px 19px;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.about_tu{width: 370px;height: 350px;border: 1px solid #ccc;margin-right: 67px;}
.about_tu img{width: 370px;height: 350px;display: block;}
.about_nr{
  width: 763px;
}
.about_nr h2{font-size: 20px;color: #fff;margin-top: 3px;}
.about_nr h3{font-size: 14px;color: #a7a5a5;font-family: Arial;}
.about_nr p{font-size: 14px;line-height: 26px;color: #d2d0d0;margin-top: 15px;}
.about_nr a{width: 81px;height: 29px;border: 1px solid #fff;display: block;background: url(./assets/gd.png) no-repeat;background-position: center;background-size: 35px 13px;margin-top: 23px;}
.about_nr a:hover{background: url(./assets/gd.png) no-repeat #cc3333;background-position: center;background-size: 35px 13px;border: 1px solid #cc3333}
/*案例*/
.case_bg{background-color: #f4f4f4;padding-top: 32px;padding-bottom: 32px;}
.case_box{width: 1200px;margin: 0 auto;}
.bt h2{font-size: 20px;color: #333;font-weight: bold;text-align: center;}
.bt span{width: 35px;height: 2px;background-color: #cc3333;display: block;margin: 17px auto;}
.case_list{margin-top: 29px;padding: 0 94px;}
.case_list dt{width: 320px;height: 232px;float: left;margin: 5px;position: relative;overflow: hidden;}
.case_list img{width: 100%;display: block;}
.case_list dd{width: 339px;height: 474px;float: left;margin: 5px;position: relative;overflow: hidden;}

.case_bj{position: absolute;width: 100%;top: 0;left: 0;height: 100%;}
.bj{background: rgba(0,0,0,0.62) url(./assets/nva_06-1.png) no-repeat center;width: 100%;height: 379px;transform: translateY(-474px);-webkit-transform: translateY(-474px);-moz-transform: translateY(-474px);-ms-transform: translateY(-474px);}
.bj_dt{background: rgba(0,0,0,0.62) url(./assets/nva_06-1.png) no-repeat center;width: 100%;height: 137px;transform: translateY(-137px);-webkit-transform: translateY(-137px);-moz-transform: translateY(-137px);-ms-transform: translateY(-137px);}
.case_nr{background: #fff;height: 95px; width:320px; position: absolute;bottom: 0;left: 0;padding: 0 13px;transform: translate(0,95px);-webkit-transform: translate(0,95px);-moz-transform: translate(0,95px);-ms-transform: translate(0,95px)}
.case_nr_dt{background: #fff;height: 95px;width:320px; position: absolute;bottom: 0;left: 0;padding: 0 13px;transform: translate(0,95px);-webkit-transform: translate(0,95px);-moz-transform: translate(0,95px);-ms-transform: translate(0,95px)}
.case_nr h3,.case_nr_dt h3{font-size: 14px;color: #cc3333;margin-top: 16px;}
.case_nr p,.case_nr_dt p{font-size: 13px;color: #666;margin-bottom: 6px;line-height: 26px;}

.case_list dd:hover .case_nr,.case_list dt:hover .case_nr_dt{transform: translate(0,0);-webkit-transform: translate(0,0);-moz-transform: translate(0,0);-ms-transform: translate(0,0);}
.case_list dd:hover .bj,.case_list dt:hover .bj_dt{transform: translateY(0);-webkit-transform: translateY(0);-moz-transform: translateY(0);-ms-transform: translateY(0);}

.gd{width: 81px;height: 29px;border: 1px solid #999;display: block;background: url(./assets/gd-2.png) no-repeat;background-position: center;background-size: 35px 13px;margin:28px auto 0;}
.gd:hover{background: url(./assets/gd.png) no-repeat #cc3333;background-position: center;background-size: 35px 13px;border: 1px solid #cc3333}

/*最新资讯*/
.news_box{width: 1200px;margin: 0 auto;padding: 32px 2px;}
.news_list{margin-top: 22px;}
.news_list li{width: 263px;float: left;margin: 18px;overflow: hidden;}
.news_t{width: 263px;height: 223px;position: relative;}
.news_t img{width: 100%;height:223px;}
.news_t span{width: 100%;height: 100%;position: absolute;top: 0;left: 0;background: rgba(0,0,0,0.75) url(./assets/ck.png) no-repeat center;transform: translateY(-100%);-webkit-transform: translateY(-100%);-moz-transform: translateY(-100%);-ms-transform: translateY(-100%);}
.news_list li:hover .news_t span{transform: translateY(0);-webkit-transform: translateY(0);-moz-transform: translateY(0);-ms-transform: translateY(0);}
.news_bt{background-color: #f4f4f4;padding: 10px 5px 2px;}
.news_bt h3{font-size: 14px;color: #333;text-align: center;}
.news_bt span{font-size: 12px;color: #cc3333;text-align: center;display: block;margin:6px 0 5px}
.news_bt p{font-size: 13px;color: #666;text-align: center;line-height: 24px; height:72px;}
.news_list li:hover{box-shadow:0 3px 16px 0 rgba(0,0,0,0.49);}

/*友情链接*/
.yq{width: 1200px;margin: 0 auto;padding-bottom: 32px;}
.yq dd{font-size: 18px;color: #333;}
.yq span{width: 35px;height: 2px;background-color: #cc3333;display: block;margin-top: 6px;}
.yq dt a{font-size: 13px;color: #999;margin: 10px 7px 0;float: left;display: block;}
.yq dt a:hover{color: #cc3333;}

/*底部*/
.yj_bg{background-color: #393939;padding: 34px 38px 20px;}
.yj_box{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.yj_fw{margin-top: 23px;padding-top: 9px;padding-bottom: 23px;border-right: 1px solid #302e2e;width: 225px;padding-right: 29px;margin-left: 38px;}
.yj_fw h2{font-size: 16px;color: white;}
.yj_fw h2 span{font-size: 20px;font-family: Arial;}
.yj_fw h3{font-size: 13px;color: #ccc;line-height: 24px;}
.yj_list{
  margin-left: 43px;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.yj_list dl{margin-left: 32px;}
.yj_list dl dd{font-size: 15px;color: white;padding-bottom: 12px;border-bottom: 1px solid #686666;padding-right: 7px;}
.yj_list dl dt a{font-size: 13px;color: #999999;display: block;margin-top: 5px;}
.yj_list dl dt a:hover{color: #cc3333;}
.yj_lx dt{font-size: 13px;color: #999;margin-top: 5px;}
.js{
  display: inline-flex;
  align-items: baseline;
  display: -ms-inline-flexbox;
  -ms-flex-align: baseline;
}
.yj_lx{
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
}
.gz{margin: 10px 7px 0 26px;}
.gz img{width: 120px;height: 120px;border: 1px solid #fff;}
.gz p{font-size: 12px;color: #999;text-align: center;}
.dibu{background-color: #363636;font-size: 12px;color: #ccc;text-align: center;padding: 11px 0;border-top: 1px solid #414141;}
.dibu a{color: #ccc;}

/*——————————————————————在线客服——————————————————*/
.zaix_box{position: fixed;right: 20px;bottom: 150px;cursor: pointer;}
.zaix_box ul{width: 60px;}
.zaix_box ul li{width: 60px;border-bottom: 1px solid #dedede;border-left: 1px solid #dedede;border-right: 1px solid #dedede;background-color: #fff;padding-top: 16px;padding-bottom: 9px;}
.zaix_box ul li img{margin: 0 auto;display: block;}
.zaix_box ul li p{font-size: 13px;color: #b2b2b2;text-align: center;margin-bottom: 7px;}
.zaix_box ul li:hover{background-color: #cc3333;}
.zaix_box ul li:hover p{color: #fff;}
.zaix_box ul li img:nth-child(2){display: none;}
.zaix_box ul li:hover img:nth-child(2){display: block;}
.zaix_box ul li:hover img:nth-child(1){display: none;}
.zaix_box ul li{position: relative}
.ziji{transition: all 0.3s;-webkit-transition: all 0.3s;-ms-transition: all 0.3s;-moz-transition: all 0.3s;}
.ziji{position: absolute;width: 300%;bottom: 0;left: -300%;}
.xf{background:#cc3333;padding-bottom: 10px;margin-right: 12px;padding-top: 4px;}
.ziji span{font-size: 13px;color: #fff;text-align: center;margin-top: 10px;display: block;}
.ziji a{font-size: 13px;display: block;background-color: #fff;color: #333;text-align: center;padding: 5px;margin: 20px 5px 0;}
.ziji b{width: 120px;height: 120px;margin: 0 auto;margin-top: 10px;border: 1px solid #fff;display: block;}

.zaix_box ul li:hover .ziji b img{display: block;}
.ziji b img{width: 120px;height: 120px;}
.ziji{display: none;}
.zaix_box ul li:hover .ziji{display: block;}
.ziji123 {width: 8px;height: 17px;position: absolute;right: 4px;bottom: 10px;}

/*————————————————子页——————————*/
.dq{background-color: #EFEFEF;padding: 6px;border-bottom: 1px solid #ccc;}
.dq dl{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: center;
  -ms-flex-align: center;
}
.dq dl h2{font-size: 13px;color: #666;padding-left: 15px;background: url(./assets/dq_wz.png)no-repeat left;}
.dq dl dd a,.dq dl dt{font-size: 13px;color: #666;margin-left: 4px;}
.dq dl dd a:hover{color: #cc3333;}

.qy_bg{background-color: #f4f4f4;padding-bottom: 64px;}
.qy_box{width: 1200px;margin: 0 auto;padding-top: 32px;}
.qy_z{width: 870px;background-color: #fff}
.about{overflow: hidden;padding: 10px;}
.about h2{font-size: 18px;color: #333;text-align: center;}
.about h3{display: flex;display: -webkit-flex;justify-content: center;}
.about h3 a,.about h3 span{font-size: 13px;color: #777;display: block;margin: 10px 5px;}
.about h3 a:hover{color: #cc3333;}
.about p{font-size: 14px;color: #666;line-height: 26px;margin-top: 15px;}
.about img{margin: 5px auto;display: block;}
.qy_y{width: 300px;margin-left: 30px;}
.y_list{}
.nva_list{background-color: #fff;padding: 5px 5px;}
.nva_list dd{font-size: 16px;color: #333;padding: 10px 0;background-color: #fff;border-bottom: 1px solid #333}
.nva_list dt a{font-size: 14px;color: #666;display: block;padding: 7px 5px;border-bottom: 1px solid #ccc;margin: 10px 0;}
.nva_list dt a:hover,.nva_list dt a.on{color: #cc3333;border-bottom: 1px solid #cc3333;}
.lx_list,.zx_list{background-color: #fff;margin-top: 30px;padding: 5px;}
.lx_list dd,.zx_list dd{font-size: 16px;color: #333;padding: 10px 0px;background-color: #fff;border-bottom: 1px solid #333;}
.lx_list dt{font-size: 14px;color: #666;padding:7px 5px;}
.zx_list dt{padding:7px 5px;margin: 10px 0;border-bottom: 1px solid #ccc}
.zx_list dt a{
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
}

.zx_t{width: 106px;height: 76px;overflow: hidden;}
.zx_t img{width: 100%;}
.zx_nr{margin-left: 10px;width: 174px;}
.zx_nr h2{font-size: 14px;color: #666;}
.zx_nr h3{font-size: 12px;color: #999;margin-top: 10px;}
.zx_list dt a:hover .zx_nr h2{color: #cc3333;}

.zy_list{padding: 30px 10px;}
.zy_list ul a{display: flex;display: -webkit-flex;}
.zy_list ul li{margin-top: 30px;}
.zy_list ul li:nth-child(1){margin-top: 0;}
.yw_t{width: 218px;height: 156px;overflow: hidden;border: 1px solid #ccc;}
.yw_t img{width: 100%;}
.yw_{margin-left: 26px;width: 606px;}
.yw_ h2{font-size: 16px;color: #333;}
.yw_ p{font-size: 14px;color: #666;line-height: 26px;margin-top: 10px;}
.yw_ span{font-size: 13px;color: #999;margin-top: 10px;display: block;}
.yw_ span:hover{color: #cc3333;}
.zy_list ul a:hover .yw_ h2{color: #cc3333;}

.an{margin-top: 30px;}
.an span{
  width: 60px;
  padding: 3px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  border: 1px solid #ccc;
  color: #3e3a39;
  background-color: #f4f4f4;cursor: pointer;}
.an span.pageinfo{width: auto;}
.an  a{border: 1px solid #ccc;justify-content: center;margin: 5px;font-size: 14px;display: inline-flex;align-items: center;width: 60px;padding: 3px;color: #3e3a39;}
.an {margin: 5px;}
.an  .an_bj{color: #fff;background-color: #cc3333;border: 1px solid #cc3333;}
.an{
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: center;
  -ms-flex-line-pack: center;
  align-items: baseline;
  margin-bottom: 10px;
}
.an  a:hover,.an span:hover{color: #fff;background-color: #cc3333;border: 1px solid #cc3333;}

.fy b{font-weight: normal;font-size: 14px;color: #333}
.fy a{color: #666;font-size: 14px;transition: color 0.3s;}
.fy li:hover a{color: #cc3333;}
.fy li:nth-child(2){margin-left: 30px;}
.fy{margin-top: 20px;border-bottom: 1px solid #ccc;line-height: 25px;}

.case{padding: 30px 0;}
.case ul li{width: 270px;margin: 10px;float: left;}
.case_t{width: 270px;height: 196px;position: relative;overflow: hidden;}
.case_t img{width: 100%;display: block;}
.case_t span{position: absolute;width: 100%;height: 100%;top: 0;background: rgba(0,0,0,0.7) url(./assets/nva_06-1.png) no-repeat center;transform: translateY(-196px);-webkit-transform: translateY(-196px);-moz-transform: translateY(-196px);-ms-transform: translateY(-196px);}
.case ul li p{font-size: 14px;color: #666;text-align: center;margin: 7px;}
.case ul li:hover .case_t span{transform: translateY(0);-webkit-transform: translateY(0);-moz-transform: translateY(0);-ms-transform: translateY(0);}
.case ul li:hover p{color: #cc3333;}

.xw_list{padding: 10px;}
.xw_list ul li{
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-top: 10px;
}
.xw_t{width: 218px;height: 156px;overflow: hidden;border: 1px solid #ccc;}
.xw_t img{width: 100%;display: block;}
.xw{width: 606px;margin-left: 26px;}
.xw h2 a{font-size: 16px;color: #333;}
.xw h3{font-size: 12px;color: #999;margin:8px;}
.xw h3 a{color: #999;margin-left: 10px;}
.xw p a{font-size: 14px;color: #666;line-height: 26px;}
.xw h4 a{font-size: 13px;color: #666;margin-top: 10px;display: block;}
.xw h2 a:hover,.xw h3 a:hover,.xw h4 a:hover{color: #cc3333;}

.job_box{padding: 20px;padding-top: 0;}
.job_box h2{font-size: 18px;color: #cc3333;margin-top: 20px;}
.job_box h3{font-size: 15px;color: #333;margin-top: 20px;}
.job_box h4{font-size: 14px;color: #333;margin-bottom: 10px;position: relative;padding-left: 8px;}
.job_box h4 span{width: 6px;height: 6px;border-radius: 50%;background-color: #555;position: absolute;left: 0;top: 50%;margin-top: -3px;}
.job_box ol{margin-top: 20px;}
.job_box ol li{font-size: 14px;color: #666;margin-top: 5px;}

.contact_box{padding: 20px;overflow: hidden;}
.contact_box dl dd{font-size: 15px;color: #cc3333;}
.contact_box dl dt{font-size: 15px;color: #555;margin-top: 5px;}
.contact_box img{width: 100%;margin: 10px 0;display: block;}
.contact_box h2{font-size: 15px;color: #333;text-align: center;margin: 10px;}
.contact_box form{display: flex;flex-wrap: wrap;}
.contact_box input[type=text]{width: 380px;display: block;padding: 5px;margin: 10px;font-size: 14px;color: #666;}
.contact_box textarea{width: 100%;margin: 10px;height: 100px;font-size: 14px;color: #666;}
.contact_box input[type=submit]{width: 100%;margin: 10px;border: none;padding: 5px;background-color: #333;font-size: 15px;color:white;cursor: pointer;}
.contact_box input[type=submit]:hover{background-color: #cc3333;}
</style>
