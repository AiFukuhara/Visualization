<template>
    <div id="sec" style="background-color: aquamarine;"></div>
</template>

<script lang="ts">

import {onMounted} from "vue";
import * as echarts from "echarts";

export default {
  name: "SectorBenke",
  mounted() {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('sec')!;
    var myChart = echarts.init(chartDom);
    var option: { legend: { orient: string; top: number; data: any[]; left: number; bottom: number; type: string }; series: { data: any[]; center: string[]; name: string; emphasis: { itemStyle: { shadowOffsetX: number; shadowBlur: number; shadowColor: string } }; type: string; radius: string }[]; tooltip: { formatter: string; trigger: string }; title: { subtext: string; top: string; left: string; text: string } };

    const data = genData(31);

    option = {
      title: {
        text: '2022年各省招生比例',
        subtext: '青义校区',
        left: '200',
        top: '40'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        // right: 200,
        left: 20,
        top: 60,
        bottom: 20,
        data: data.legendData
      },
      series: [
        {
          name: '省份',
          type: 'pie',
          radius: '50%',
          center: ['55%', '60%'],
          data: data.seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    function genData(count: number) {
      // prettier-ignore
      const nameList = [
        '北京', '天津', '河北','山西','内蒙古', '辽宁', '吉林','黑龙江','上海', '江苏', '浙江','安徽','福建', '江西', '山东','河南','湖北', '湖南', '广东','广西','海南', '重庆', '四川','贵州','云南','西藏', '山西','甘肃','青海','宁夏', '新疆'];
      const stuNum = [20,52,193,55,87,31,40,30,30,70,58,190,80,61,119,70,90,77,160,80,38,40,3850,70,67,78,67,123,30,40,25];
      const legendData = [];
      const seriesData = [];
      for (var i = 0; i < count; i++) {
        var name:string = nameList[i];
        legendData.push(name);
        seriesData.push({
          name: name,
          value: stuNum[i]
        });
      }

      return {
        legendData: legendData,
        seriesData: seriesData
      };

    }

    option && myChart.setOption(option);
  }
}
</script>

<style scoped>
#sec{
  overflow: hidden;
  /* width: 100%;
  height: 100%; */
  width: 1000px;
  height: 1500px;
  margin: 0;
  font-family: "微软雅黑";
  top:150px;
  left:100px;
}
</style>