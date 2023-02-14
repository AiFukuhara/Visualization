<template>
  <!-- <div id="map"  :style="{ width: width + 'px', height: height + 'px' }"></div> -->
<!--  <div id="map"></div>-->
    <div id="map"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted ,nextTick} from 'vue';
import * as echarts from 'echarts';

//104.70291013907156,31.540988948821173
export default defineComponent({
  name:"SwustMap",
  props: {
    // 传入需要定位的经纬度
    latitude: {
      type: Number,
      default: () => {
        return 31.539988948821173
      },
    },
    longitude: {
      type: Number,
      default: () => {
        return 104.70291013907156
      },
    },
    width: {
      type: Number,
      default: 900,
    },
    height: {
      type: Number,
      default: 650,
    },
    isShow:{
      default:true,
    }
  },

  setup(props, { emit }) {
    const BMap = (window as any).BMap
    onMounted(() => {
      var map = new BMap.Map('map')
      var point = new BMap.Point(props.longitude, props.latitude,props.isShow)
      //   var point = new BMap.Point(116.46, 39.92)
      console.log(props.latitude)
      console.log(props.longitude)
      //   console.log(point)

      map.centerAndZoom(point, 16)
      map.enableScrollWheelZoom(true)

      map.addEventListener('click', function (e: any) {
        //   let a = JSON.parse(e)
        console.log('点击的经纬度：' + e.point.lng + ',' + e.point.lat) //
        emit('update:longitude', e.point.lng)
        emit('update:latitude', e.point.lat)
      })

      // var point = new BMap.Point(104.71079726144916,31.53772669852304);
      var marker = new BMap.Marker(point);// 创建标注
      map.addOverlay(marker);

      var sContent = `<h4 style='margin:0 0 5px 0;'>科技之光</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemo' src='src/assets/swust_01.png' width='139' height='104'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
        西南科技大学科技之光广场是本校的地标性建筑之一其雕塑上由0和1的计算机语言、钉子以及齿轮组成，
    象征计算机学院与制造学院的光辉历程。本产品雕塑为金属材质，底座为亚克力板，外罩为透明亚克力材料，
    可作为摆件镇纸作用，造型简洁，具有很强的收藏纪念意义。
        21世纪是信息时代主导的全新时代，基于计算机技术的信息化、网络化、现代化、智能化广泛应用于社会各个行业，
    计算机成为了日常生产与生活、管理、娱乐、科研等的主要工具。而计算机的工作原理是基于二进制的以数字1和0代表的代码进行的。
    所以，西南科技大学校园内的科技之光广场上的标志性景观雕塑就是代表：科技、信息人才培养及时代标志的视觉景观雕塑。
    </p></div>`;
      var infoWindow = new BMap.InfoWindow(sContent);
      marker.addEventListener("click", function(){
        this.openInfoWindow(infoWindow);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemo').onload = function () {
          infoWindow.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
        //alert("您点击了标注");
      });


      var markerd = new BMap.Marker(new BMap.Point(104.710,31.538));
      map.addOverlay(markerd);
// 创建图文信息窗口
      var sContentd = `<h4 style='margin:0 0 5px 0;'>西南科技大学国家科技园</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemod' src='src/assets/technology.jpg' width='139' height='90'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    西南科技大学国家大学科技园（以下简称“大学科技园”）是2001年经科技部、教育部批准在绵筹建的全国首批国家大学科技园，2003年通过科技部、教育部验收正式成立。大学科技园现已建设成为国家级科技企业孵化器、国家技术转移示范机构、国家级高校学生科技创业实习基地和国家小型微型企业创新示范基地，实现了大学科技园“五大功能”国牌基地全覆盖。大学科技园是首批四川省大学生创新创业示范俱乐部、省级大学生创新创业园区（孵化基地）、省级小企业创业示范基地和四川省军民两用技术转移和产业孵化中心。
    </p></div>`;
      var infoWindowd = new BMap.InfoWindow(sContentd);
// marker添加点击事件
      markerd.addEventListener('click', function () {
        this.openInfoWindow(infoWindowd);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemod').onload = function () {
          infoWindowd.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
      });

      // 104.69506344044186,31.54564373604066

      var markere = new BMap.Marker(new BMap.Point(104.69506344044186,31.54564373604066));
      map.addOverlay(markere);
// 创建图文信息窗口
      var sContente = `<h4 style='margin:0 0 5px 0;'>西南科技大学冲击与爆破动力实验室</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemoe' src='src/assets/technology.jpg' width='139' height='90'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    西南科技大学冲击与爆破动力实验室
    </p></div>`;
      var infoWindowe = new BMap.InfoWindow(sContente);
// marker添加点击事件
      markere.addEventListener('click', function () {
        this.openInfoWindow(infoWindowe);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemoe').onload = function () {
          infoWindowe.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
      });


      // 104.70792717534474,31.542543218310378
      var markerl = new BMap.Marker(new BMap.Point(104.70792717534474,31.542543218310378));
      map.addOverlay(markerl);
// 创建图文信息窗口
      var sContentl = `<h4 style='margin:0 0 5px 0;'>西南科技大学逸夫图书馆</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemol' src='src/assets/library.jpg' width='139' height='90'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    逸夫图书馆指的是由邵逸夫先生资助建造的图书馆。许多高校均设有逸夫图书馆，如清华大学、南京工业大学、天津财经大学、扬州大学、安徽大学、兰州交通大学、浙江师范大学、北京化工大学、西南科技大学、福建农林大学、闽南师范大学、中国计量大学、烟台大学、山东理工大学、河北联合大学、河南大学、西安电子科技大学、聊城大学、长春工程学院、吕梁学院、郑州轻工业大学、徐州工程学院、四川美术学院、三明学院、普洱学院、南京工程学院等等
    </p></div>`;
      var infoWindowl = new BMap.InfoWindow(sContentl);
// marker添加点击事件
      markerl.addEventListener('click', function () {
        this.openInfoWindow(infoWindowl);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemol').onload = function () {
          infoWindowl.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
      });


      // 104.70220946077373,31.540142746056716
      var markera = new BMap.Marker(new BMap.Point(104.70220946077373,31.540142746056716));
      map.addOverlay(markera);
// 创建图文信息窗口
      var sContenta = `<h4 style='margin:0 0 5px 0;'>西南科技大学校史馆</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemoa' src='src/assets/historym.png' width='139' height='90'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    作为学校“十四五”文化建设规划的重点工程和建校70周年工作的重点项目，校史馆由党委宣传部牵头，档案馆负责实施，自2020年开始规划，历时近两年完成主体建设和基本布展。校史馆占地面积约1000平方米，分为序厅、历史厅、现代厅、特色厅、尾厅等5个主题展厅，现收入1000余件珍贵图片和实物展品，生动再现了学校70年非凡历程，描绘出学校丰富的文化脉络，彰显着“艰苦奋斗、拼搏创新”的西南科大精神。馆内同时设有15个互动区域，让参观者可以沉浸式地“触摸”到西南科技大学发展的“脉搏”，感受到这所有着70年厚重历史的学校的魅力。
    </p></div>`;
      var infoWindowa = new BMap.InfoWindow(sContenta);
// marker添加点击事件
      markera.addEventListener('click', function () {
        this.openInfoWindow(infoWindowa);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemoa').onload = function () {
          infoWindowa.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
      });


      //104.70445522454867,31.540635155703647
      var markerj = new BMap.Marker(new BMap.Point(104.70445522454867,31.540635155703647));
      map.addOverlay(markerj);
// 创建图文信息窗口
      var sContentj = `<h4 style='margin:0 0 5px 0;'>九州湖畔</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemoj' src='src/assets/tiane.png' width='139' height='90'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    九州湖，之所以取名为九州湖，是有其深意的。相传大禹铸造九鼎而分天下为九州。而西科大将此湖命名为九州湖，也是暗含此意。“身立九州，而心有天下”这就是九州湖的隐喻之所在。体现的是西科人的壮志雄心和远大抱负。后来又引申为“身立九州，而心忧天下”，更是体现西科人关注社稷，关注国家的伟大情操。
再后来，九州湖畔，被用作贴吧的名字。于另外一个西科大的贴吧“龙山脚下”相呼应。龙山脚下代表老区，而九州湖畔代表新区。当然这并不代表着两个贴吧的对立，而是有好的促进，共同的，和谐的发展。</p></div>`;
      var infoWindowj = new BMap.InfoWindow(sContentj);
// marker添加点击事件
      markerj.addEventListener('click', function () {
        this.openInfoWindow(infoWindowj);
        // 图片加载完毕重绘infoWindow
        document.getElementById('imgDemoj').onload = function () {
          infoWindowj.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
        };
      });
      // var map = new BMap.Map('map');
      // var point = new BMap.Point(116.404, 39.915);
      // map.centerAndZoom(point, 15);
      // map.enableScrollWheelZoom(true);

// 绘制面

      var polygon = new BMap.Polygon([
        // new BMap.Point(116.387112, 39.920977),
        // new BMap.Point(116.385243, 39.913063),
        // new BMap.Point(116.394226, 39.917988),
        // new BMap.Point(116.401772, 39.921364),
        // new BMap.Point(116.41248, 39.927893),
        new BMap.Point(104.69687352604446,31.54723606342599),
        new BMap.Point(104.69611894941607,31.5459743485647),
        new BMap.Point(104.69687352604446,31.54458951974275),
        new BMap.Point(104.69813115375842,31.545451193448496),
        new BMap.Point(104.6991372559296,31.545851253509667),
        new BMap.Point(104.69985590033758,31.54532809769666),
        new BMap.Point(104.70014335810077,31.544435648592792),
        new BMap.Point(104.70143691803514,31.54440487433206),
        new BMap.Point(104.70244302020632,31.5442510028747),
        new BMap.Point(104.70258674908791,31.544866487167123),
        new BMap.Point(104.7032694612755,31.544958809457476),
        new BMap.Point(104.70355691903869,31.546066669748388),
        new BMap.Point(104.70506607229545,31.5458820272888),
        new BMap.Point(104.71232438081607,31.545205001780886),
        new BMap.Point(104.71225251637527,31.53809593453112),
        new BMap.Point(104.71016844759212,31.536495549631038),
        new BMap.Point(104.70887488765776,31.53634166500761),
        new BMap.Point(104.7070423444174,31.536157003121396),
        new BMap.Point(104.70506607229545,31.535449129140794),
        new BMap.Point(104.70398810568348,31.5344642519782),
        new BMap.Point(104.7029820035123,31.53320236278212),
        new BMap.Point(104.70237115576552,31.531817342621473),
        new BMap.Point(104.70096979916995,31.532556022622124),
        new BMap.Point(104.6989216626072,31.53366403155891),
        new BMap.Point(104.69744844157084,31.534218031048358),
        new BMap.Point(104.69482538948171,31.537326522171607),
        new BMap.Point(104.69234606627417,31.540588786591268),
        new BMap.Point(104.69198674407018,31.54286614823108),
        new BMap.Point(104.69058538747461,31.544497197083512),
        new BMap.Point(104.6909087774582,31.54628208548502),
        new BMap.Point(104.69187894740898,31.547789981582387),
        new BMap.Point(104.6950409828041,31.548036166363953),
        new BMap.Point(104.69687352604446,31.547389929),
      ], {
        strokeColor: 'blue',
        strokeWeight: 5,
        strokeOpacity: 0.7
      });
      map.addOverlay(polygon);


// // 绘制线
//       var polyline = new BMap.Polyline([
//         new BMap.Point(116.399, 39.910),
//         new BMap.Point(116.405, 39.920),
//         new BMap.Point(116.423493, 39.907445)
//       ], {
//         strokeColor: 'blue',
//         strokeWeight: 2,
//         strokeOpacity: 0.5
//       });
//       map.addOverlay(polyline);
// 绘制圆
//       var circle = new BMap.Circle(new BMap.Point(104.695562,31.54202), 5000, {
//         strokeColor: 'blue',
//         strokeWeight: 2,
//         strokeOpacity: 0.5
//       });
//       map.addOverlay(circle);

      // function openEdit() {
      //   polyline.enableEditing();
      //   polygon.enableEditing();
      //   circle.enableEditing();
      // }
      // function closeEdit() {
      //   polygon.disableEditing();
      //   polyline.disableEditing();
      //   circle.disableEditing();
      // }
    })
  },
})
</script>

<style>
#map{
  /*width: 100% !important;*/
  /*height: 55vh !important;*/
  /*margin: 20px auto;*/
  /*overflow: hidden;*/

  /*transform: translateX(-50%);*/
  /*position: absolute;*/
  /*left: 30%;*/
  /*background-color: #f5a623;*/
  /*padding: 2px 10px;*/
  /*border-radius: 6px;*/
  /*color: #fff;*/
  /*text-align: center;*/

  overflow: hidden;
  /* width: 100%;
  height: 100%; */
  width: 880px;
  height: 550px;
  margin: 0;
  font-family: "微软雅黑";
  top:0px;
  left:20px;

}
</style>