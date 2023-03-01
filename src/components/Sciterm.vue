<template>
  <div id="term"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
export default {
  name: "Sciterm",
  mounted() {


    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('term')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    var datas = [
      ////////////////////////////////////////
      [
        { name: 'SCI 一区', value: 36 },
        { name: 'SCI 二区', value: 124 },
        { name: 'SCI 三、四区', value: 932 },
        { name: 'CSSCI', value: 1170 },
      ],
      // ////////////////////////////////////////
      [
        { name: '学术著作', value: 276 },
        { name: '授权发明专利', value: 504 },
        { name: '科技成果转化', value: 102 },
      ],

      ////////////////////////////////////////
      [
        { name: '国家发明奖', value: 1 },
        { name: '自然科学和科技进步奖', value: 1 },
        { name: '省部级奖励', value: 50 },
        { name: '一级学会奖励', value: 38 }
      ]
    ];

    option = {
      title: {
        text: '学术成果',
        left: 'center',
        textStyle: {
          color: '#3f3737',
          fontWeight: 'normal',
          fontSize: 14
        }
      },
      series: datas.map(function (data, idx) {
        var top = idx * 33.3;
        return {
          type: 'pie',
          radius: [20, 60],
          top: top + '%',
          height: '33.33%',
          left: 'center',
          width: 400,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c} 项}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            }
          },
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80
          },
          labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart.getWidth() / 2;
            const points = params.labelLinePoints as number[][];
            // Update the end point.
            points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;

            return {
              labelLinePoints: points
            };
          },
          data: data
        };
      })
    };

    option && myChart.setOption(option);

  }
}
</script>

<style scoped>
#term{
  overflow: hidden;
  /* width: 100%;
  height: 100%; */
  width: 500px;
  height: 750px;
  margin: 0;
  font-family: "微软雅黑";
  top:150px;
  left:100px;
}
</style>