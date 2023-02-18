<template>
  <div style="float: left">
    <div id="myChart" :style="{ width: '1200px', height: '300px'}"></div>
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
export default defineComponent({
  setup()
  {
    const { proxy } = getCurrentInstance() as any
    // 配置建议写在 onMount 的外面

    const prov = [
      {
        name: '四川',
        value: 5260
      },
      {
        name: '其他',
        value: 2560
      }
    ];
    const sex = [
      {
        name: '男',
        value: 4599
      },
      {
        name: '女',
        value: 3217
      }
    ];
    const age = [
      {
        name: '未满18岁',
        value: 1139
      },
      {
        name: '满18岁',
        value: 6681
      }
    ];
    const option = {
      title: [
        {
          text: '西南科技大学2020新生数据',
          left: 'center'
        },
        {
          subtext: '来源省份',
          left: '16.67%',
          top: '75%',
          textAlign: 'center'
        },
        {
          subtext: '男女比例',
          left: '50%',
          top: '75%',
          textAlign: 'center'
        },
        {
          subtext: '年龄比例',
          left: '83.33%',
          top: '75%',
          textAlign: 'center'
        }
      ],
      series: [
        {
          type: 'pie',
          radius: '75%',
          center: ['50%', '50%'],
          data: prov,
          label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
          },
          left: 0,
          right: '66.6667%',
          top: 0,
          bottom: 0
        },
        {
          type: 'pie',
          radius: '75%',
          center: ['50%', '50%'],
          data: sex,
          label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5
          },
          left: '33.3333%',
          right: '33.3333%',
          top: 0,
          bottom: 0
        },
        {
          type: 'pie',
          radius: '75%',
          center: ['50%', '50%'],
          data: age,
          label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20
          },
          left: '66.6667%',
          right: 0,
          top: 0,
          bottom: 0
        }
      ]
    };
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



