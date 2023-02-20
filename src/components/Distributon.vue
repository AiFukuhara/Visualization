<template>
  <div id="bar"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
export default {
  name: "Distributon",
  mounted() {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('bar')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'item',
        // trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '2%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年', '2022年']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '毕业人数',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '本科毕业',
          stack:'毕业人数',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '硕士毕业',
          stack:'毕业人数',
          barWidth: 5,
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '博士毕业',
          stack:'毕业人数',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '就业人数',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '招生总人数',
          type: 'bar',
          data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          emphasis: {
            focus: 'series'
          },
          markLine: {
            lineStyle: {
              type: 'dashed'
            },
            data: [[{ type: 'min' }, { type: 'max' }]]
          }
        },
        {
          name: '本科招生',
          type: 'bar',
          barWidth: 5,
          stack: '招生总人数',
          emphasis: {
            focus: 'series'
          },
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
          name: '硕士招生',
          type: 'bar',
          stack: '招生总人数',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
          name: '博士招生',
          type: 'bar',
          stack: '招生总人数',
          emphasis: {
            focus: 'series'
          },
          data: [60, 72, 71, 74, 190, 130, 110]
        }
      ]
    };

    option && myChart.setOption(option);
  }
}
</script>

<style scoped>
#bar{
  overflow: hidden;
  /* width: 100%;
  height: 100%; */
  width: 800px;
  height: 500px;
  margin: 0;
  font-family: "微软雅黑";
  top:150px;
  left:100px;
}
</style>