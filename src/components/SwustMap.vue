<template>
  <!-- <div id="map"  :style="{ width: width + 'px', height: height + 'px' }"></div> -->
  <div id="map"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted ,nextTick} from 'vue';
//104.70291013907156,31.540988948821173
export default defineComponent({
  name:"SwustMap",
  props: {
    // 传入需要定位的经纬度
    latitude: {
      type: Number,
      default: () => {
        return 31.540988948821173
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
      var marker = new BMap.Marker(point);        // 创建标注
      map.addOverlay(marker);

      var sContent = `<h4 style='margin:0 0 5px 0;'>科技之光</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemo' src='./assets/swust_01.png' width='139' height='104'/>
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
    // onMounted(()=>{
    //   var myChart = echarts.init(document.getElementById('table1'));
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

    // onMounted(()=>{
    //   var myChart = echarts.init(document.getElementById('table2'));
    //
    //   // 指定图表的配置项和数据
    //   var option = {
    //     title: {
    //       text: '第一个 ECharts 实例'
    //     },
    //     tooltip: {},
    //     legend: {
    //       data:['销量']
    //     },
    //     xAxis: {
    //       data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //     },
    //     yAxis: {},
    //     series: [{
    //       name: '销量',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }]
    //   };
    //
    //   // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option);
    // })

    // onMounted(()=>{
    //   type EChartsOption = echarts.EChartsOption;
    //
    //   var chartDom = document.getElementById('sector')!;
    //   var myChart = echarts.init(chartDom);
    //   var option: EChartsOption;
    //
    //   var data = [
    //     {
    //       name: 'Grandpa',
    //       children: [
    //         {
    //           name: 'Uncle Leo',
    //           value: 15,
    //           children: [
    //             {
    //               name: 'Cousin Jack',
    //               value: 2
    //             },
    //             {
    //               name: 'Cousin Mary',
    //               value: 5,
    //               children: [
    //                 {
    //                   name: 'Jackson',
    //                   value: 2
    //                 }
    //               ]
    //             },
    //             {
    //               name: 'Cousin Ben',
    //               value: 4
    //             }
    //           ]
    //         },
    //         {
    //           name: 'Aunt Jane',
    //           children: [
    //             {
    //               name: 'Cousin Kate',
    //               value: 4
    //             }
    //           ]
    //         },
    //         {
    //           name: 'Father',
    //           value: 10,
    //           children: [
    //             {
    //               name: 'Me',
    //               value: 5,
    //               itemStyle: {
    //                 color: 'red'
    //               }
    //             },
    //             {
    //               name: 'Brother Peter',
    //               value: 1
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: 'Mike',
    //       children: [
    //         {
    //           name: 'Uncle Dan',
    //           children: [
    //             {
    //               name: 'Cousin Lucy',
    //               value: 3
    //             },
    //             {
    //               name: 'Cousin Luck',
    //               value: 4,
    //               children: [
    //                 {
    //                   name: 'Nephew',
    //                   value: 2
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: 'Nancy',
    //       children: [
    //         {
    //           name: 'Uncle Nike',
    //           children: [
    //             {
    //               name: 'Cousin Betty',
    //               value: 1
    //             },
    //             {
    //               name: 'Cousin Jenny',
    //               value: 2
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ];
    //
    //   option = {
    //     visualMap: {
    //       type: 'continuous',
    //       min: 0,
    //       max: 10,
    //       inRange: {
    //         color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
    //       }
    //     },
    //     series: {
    //       type: 'sunburst',
    //       data: data,
    //       radius: [0, '90%'],
    //       label: {
    //         rotate: 'radial'
    //       }
    //     }
    //   };
    //
    //   option && myChart.setOption(option);
    // })
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
  width: 1000px;
  height: 1000px;
  margin: 0;
  font-family: "微软雅黑";
  top:150px;
  left:100px;

}
</style>