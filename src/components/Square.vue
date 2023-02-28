<template>
  <div id="squ"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import $ from 'jquery';
export default {
  name: "Square",
  mounted() {
    var ROOT_PATH = ' http://localhost:5173/src/assets/disk.tree.json';
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('squ')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    myChart.showLoading();

    $.get(ROOT_PATH, function (diskData) {
      myChart.hideLoading();

      function getLevelOption() {
        return [
          {
            itemStyle: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 1
            },
            upperLabel: {
              show: false
            }
          },
          {
            itemStyle: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              itemStyle: {
                borderColor: '#ddd'
              }
            }
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        ];
      }

      myChart.setOption(
          (option = {
            title: {
              text: 'Disk Usage',
              left: 'center'
            },

            tooltip: {
              formatter: function (info: any) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                  treePath.push(treePathInfo[i].name);
                }

                return [
                  '<div class="tooltip-title">' +
                  echarts.format.encodeHTML(treePath.join('/')) +
                  '</div>',
                  'Disk Usage: ' + echarts.format.addCommas(value) + ' KB'
                ].join('');
              }
            },

            series: [
              {
                name: 'Disk Usage',
                type: 'treemap',
                visibleMin: 300,
                label: {
                  show: true,
                  formatter: '{b}'
                },
                upperLabel: {
                  show: true,
                  height: 30
                },
                itemStyle: {
                  borderColor: '#fff'
                },
                levels: getLevelOption(),
                data: diskData
              }
            ]
          })
      );
    });

    option && myChart.setOption(option);

  }
}
</script>

<style scoped>
#squ{
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