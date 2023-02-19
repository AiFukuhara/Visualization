<template>
  <div>
    <div id="tree"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
  data(){
    return{

    }
  },
  mounted(){
    this.tree();
  },
  methods:{
    tree(){

      let tr = echarts.init(document.getElementById("tree"));
      tr.setOption({
        title : {
          show:false
        },
        calculable : false,
        series : [{
          name:'树图',
          type:'tree',
          //排列方式，横向、纵向
          orient: 'vertical',
          left: '2%',
          right: '2%',
          top: '12%',
          bottom: '12%',
          //连接线长度
          layerPadding: 30,
          //结点间距
          nodePadding: 20,
          //图形形状
          symbol: 'circle',
          //尺寸大小
          symbolSize: 40,
          label:{
            normal:{
              show:true,
              formatter:function(param){
                if(param.name=="销售部"){
                  return ''
                }else{
                  return param.name
                }
              },
            },
            emphasis:{
              show:false,
            }
          },
          leaves: {//最底部文字样式
            label: {
              normal: {
                position: 'bottom',
                rotate: -90,
                verticalAlign: 'middle',
                align: 'left',
                show:false
              },
              emphasis:{
                show:false
              }
            }
          },
          lineStyle:{//正常情况显示
            color: 'red',
            width: 5,
          },
          data: [
            {
              name: '西南科技大学名人',
              //图片大小
              symbolSize: [60, 80],
              //自定义图片
              symbol: 'image://src/assets/swust_01.png',
              url: "https://xyh.swust.edu.cn/portal.php?mod=list&catid=44",
              children: [
                {
                  name: '70年代',
                  symbol: 'circle',
                  lineStyle:{
                    color:"red"
                  },
                  symbolSize: [70, 60],
                  children: [
                    {
                      name: '庞中华',
                      symbol: 'image://src/assets/pangzhonghua.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=413",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"red"
                      }
                    },
                    {
                      name: '曾祥炜',
                      symbol: 'image://src/assets/zemgyamgwei.jpg',
                      symbolSize: [70, 80],
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=414",
                      lineStyle:{
                        color:"red"
                      }
                    },
                    {
                      name: '刘碧贵',
                      symbol: 'image://src/assets/liubigui.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=422 ",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"red"
                      }

                    },
                    {
                      name: '王海滨',
                      symbol: 'image://src/assets/wanghaibing.jpg',
                      url: "",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"red"
                      }
                    }
                  ]
                },
                {
                  name: '80,90年代',
                  symbol: 'circle',
                  symbolSize: [60, 60],
                  lineStyle:{
                    color:"blue"
                  },
                  children: [
                    {
                      name: '王聚会',
                      symbol: 'image://src/assets/wangjuhui.jpg',
                      url: "",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"blue"
                      }
                    },
                    {
                      name: '杜建中',
                      symbol: 'image://src/assets/dujianzhong.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=1036",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"blue"
                      }
                    }
                  ]
                },
                {
                  name: '10年代',
                  symbol: 'circle',
                  symbolSize: [60, 60],
                  lineStyle:{
                    color:"#aaa"
                  },
                  children: [
                    {
                      name: '蒋敏',
                      symbol: 'image://src/assets/jiangming.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=125",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"#aaa"
                      }
                    },
                    {
                      name: '宋国旭',
                      symbol: 'image://src/assets/songguoxu.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=1673",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"#aaa"
                      }
                    }
                  ]
                },
                {
                  name: '至今',
                  symbol: 'circle',
                  symbolSize: [60, 60],
                  lineStyle:{
                    color:"green"
                  },
                  children: [
                    {
                      name: '吕福强',
                      symbol: 'image://src/assets/lvfuqiang.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=2267",

                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"green"
                      }
                    },
                    {
                      name: '耿向顺',
                      symbol: 'image://src/assets/gengxiangshun.jpg',
                      url: "https://xyh.swust.edu.cn/portal.php?mod=view&aid=2122",
                      symbolSize: [70, 80],
                      lineStyle:{
                        color:"green"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }]
      })
      tr.on("click",function (e){
        console.log(e);
        window.location.href = e.data.url;
      })
    }
  }

}
</script>
<style scoped>
#tree{
  display:inline-block;
  width:1400px;
  height:750px;
  background-image: url("src/assets/icon70.png");
}
</style>