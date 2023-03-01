<template>
  <!--  <Distributon></Distributon>-->

  <div style="float: left;">
    <div id="myChart" :style="{ width: '1200px', height: '300px'}"></div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
import 'echarts-gl';
export default defineComponent({
  setup(){
    const { proxy } = getCurrentInstance() as any
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',

          data: [data],

          left: '2%',
          right: '2%',
          top: '8%',
          bottom: '20%',

          symbol: 'emptyCircle',

          orient: 'vertical',

          expandAndCollapse: true,

          label: {
            position: 'top',
            rotate: -90,
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },

          leaves: {
            label: {
              position: 'bottom',
              rotate: -90,
              verticalAlign: 'middle',
              align: 'left'
            }
          },

          animationDurationUpdate: 750
        }
      ]
    }
    onMounted(() => {
      // 获取挂载的组件实例
      const echarts = proxy.$ECharts
      //初始化挂载
      const echarts1 = echarts.init(document.getElementById('myChart'))
      //添加配置
      echarts1.setOption(option)
      // 自适应
      window.onresize = function () {
        echarts1.resize()
      }
    })
    return {}
  }
})


</script>