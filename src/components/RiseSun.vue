<template>
  <div id="sun"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
export default {
  name: "RiseSun",
  mounted() {
    var app: any = {};
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('sun')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    var data = [
      {
        name: '国防科技学院',
        itemStyle: {
          color: '#da0d68'
        },
        children: [
          {
            name: '核科学与技术',
            value: 14,
            itemStyle: {
              color: '#975e6d'
            },
            children: [
              {
                name: '辐射防护及环境保护',
                value: 4,
                itemStyle: {
                  color: '#e9f911'
                }
              },
              {
                name: '核燃料循环与材料',
                value: 4,
                itemStyle: {
                  color: '#cc5511'
                }
              },
              {
                name: '核技术及应用',
                value: 6,
                itemStyle: {
                  color: '#72d211'
                }
              },
            ]
          },

          {
            name: '能源动力',
            value: 10,
            itemStyle: {
              color: '#e0719c'
            },
            children: [
              {
                name: '核能工程',
                value: 5,
                itemStyle: {
                  color: '#f99e1c'
                }
              },
              {
                name: '含能材料',
                value: 5,
                itemStyle: {
                  color: '#ef5a78'
                }
              },
            ]
          },

          {
            name: '电子信息',
            value: 8,
            itemStyle: {
              color: '#f99e1c'
            },
            children: [
              {
                name: '控制工程',
                value: 10,
                itemStyle: {
                  color: '#e0719c'
                }
              },
              {
                name: 'Jasmine',
                value: 1,
                itemStyle: {
                  color: '#f7f1bd'
                }
              }
            ]
          },

          {
            name: '材料与化工',
            value: 13,
            itemStyle: {
              color: '#f99e1c'
            },
            children: [
              {
                name: '材料工程',
                value: 13,
                itemStyle: {
                  color: '#f7f1bd'
                }
              }
            ]
          }

        ]
      },
      {
        name: '信息工程学院',
        itemStyle: {
          color: '#da1d23'
        },
        children: [
          {
            name: '信息与通信工程',
            value: 43,
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: '通信与信息系统',
                value: 13,
                itemStyle: {
                  color: '#3e0317'
                }
              },
              {
                name: '信号与信息处理',
                value: 15,
                itemStyle: {
                  color: '#e62969'
                }
              },
              {
                name: '物联网技术',
                value: 15,
                itemStyle: {
                  color: '#6569b0'
                }
              },
            ]
          },
          {
            name: '控制科学与工程',
            value: 52,
            itemStyle: {
              color: '#c94a44'
            },
            children: [
              {
                name: '控制理论与控制工程',
                value: 14,
                itemStyle: {
                  color: '#b53b54'
                }
              },
              {
                name: '机器人科学与工程',
                value: 8,
                itemStyle: {
                  color: '#a5446f'
                }
              },
              {
                name: '检测技术与自动化装置',
                value: 7,
                itemStyle: {
                  color: '#f7a128'
                }
              },
              {
                name: '复杂系统与组网控制',
                value: 11,
                itemStyle: {
                  color: '#e2631e'
                }
              },
              {
                name: '模式识别与智能系统',
                value: 12,
                itemStyle: {
                  color: '#fde404'
                }
              }
            ]
          },
          {
            name: '电子信息',
            value: 170,
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: '电子与通信工程',
                value: 90,
                itemStyle: {
                  color: '#f2684b'
                }
              },
              {
                name: '控制工程',
                value: 80,
                itemStyle: {
                  color: '#e73451'
                }
              },
            ]
          },

          // {
          //   name: '颜色例子',
          //   itemStyle: {
          //     color: '#f7a128'
          //   },
          //   children: [
          //     {
          //       name: 'Orange',
          //       value: 1,
          //       itemStyle: {
          //         color: '#e2631e'
          //       }
          //     },
          //     {
          //       name: 'Lemon',
          //       value: 1,
          //       itemStyle: {
          //         color: '#fde404'
          //       }
          //     },
          //     {
          //       name: 'Lime',
          //       value: 1,
          //       itemStyle: {
          //         color: '#7eb138'
          //       }
          //     },
          //     {
          //       name: 'Pomegranate',
          //       value: 1,
          //       itemStyle: {
          //         color: '#e65656'
          //       }
          //     },
          //     {
          //       name: 'Pineapple',
          //       value: 1,
          //       itemStyle: {
          //         color: '#f89a1c'
          //       }
          //     },
          //     {
          //       name: 'Grape',
          //       value: 1,
          //       itemStyle: {
          //         color: '#aeb92c'
          //       }
          //     },
          //     {
          //       name: 'Apple',
          //       value: 1,
          //       itemStyle: {
          //         color: '#4eb849'
          //       }
          //     },
          //     {
          //       name: 'Peach',
          //       value: 1,
          //       itemStyle: {
          //         color: '#f68a5c'
          //       }
          //     },
          //     {
          //       name: 'Pear',
          //       value: 1,
          //       itemStyle: {
          //         color: '#baa635'
          //       }
          //     },
          //     {
          //       name: 'Isovaleric Acid',
          //       value: 1,
          //       itemStyle: {
          //         color: '#8eb646'
          //       }
          //     },
          //     {
          //       name: 'Citric Acid',
          //       value: 1,
          //       itemStyle: {
          //         color: '#faef07'
          //       }
          //     },
          //     {
          //       name: 'Malic Acid',
          //       value: 1,
          //       itemStyle: {
          //         color: '#c1ba07'
          //       }
          //     }
          //   ]
          // }
        ]
      },
      {
        name: '计算机科学与技术学院',
        itemStyle: {
          color: '#ebb40f'
        },
        children: [
          {
            name: '计算机科学与技术',
            value: 23,
            itemStyle: {
              color: '#e1c315'
            },
            children: [
              {
                name: '计算机系统结构',
                value: 8,
                itemStyle: {
                  color: '#9ea718'
                }
              },
              {
                name: '计算机应用技术',
                value: 9,
                itemStyle: {
                  color: '#94a76f'
                },

              },
              {
                name: '信息安全',
                value: 4,
                itemStyle: {
                  color: '#d0b24f'
                }
              },
            ]
          },
          {
            name: '软件工程',
            value: 25,
            itemStyle: {
              color: '#b09733'
            },
            children: [
              {
                name: '软件服务工程',
                value: 8,
                itemStyle: {
                  color: '#8f1c53'
                }
              },
              {
                name: '可视化与人机交互',
                value: 9,
                itemStyle: {
                  color: '#b34039'
                }
              },
              {
                name: '领域软件工程',
                value: 8,
                itemStyle: {
                  color: '#ba9232'
                }
              },
            ]
          },
          {
            name: '电子信息',
            value: 184,
            itemStyle: {
              color: '#b09733'
            },
            children: [
              {
                name: '计算机技术',
                value: 184,
                itemStyle: {
                  color: '#f26355'
                }
              },
            ]
          }
        ]
      },
      {
        name: '数理学院',
        itemStyle: {
          color: '#187a2f'
        },
        children: [
          {
            name: '数学',
            value: 10,
            itemStyle: {
              color: '#a2b029'
            },
            children: [
              {
                name: '计算数学',
                value: 3,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: '应用数学',
                value: 3,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: '运筹学与控制论',
                value: 4,
                itemStyle: {
                  color: '#f26355'
                }
              },
            ]
          },
          {
            name: '物理学',
            value: 20,
            itemStyle: {
              color: '#718933'
            },
            children: [
              {
                name: '光学',
                value: 6,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: '凝聚态物理',
                value: 6,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: '理论物理',
                value: 2,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: '等离子体物理',
                value: 3,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: '例子物理与原子核物理',
                value: 3,
                itemStyle: {
                  color: '#f26355'
                }
              },
            ]
          },
        ]
      },
    ];

    option = {
      title: {
        text: '硕士研究生各研究方向招生信息',
        subtext: '硕士招生章程',
        textStyle: {
          fontSize: 18,
          align: 'center'
        },
        subtextStyle: {
          align: 'center'
        },
        sublink: 'http://gs.swust.edu.cn/zs/2022/0916/c7797a165994/page.htm'
      },
      series: {
        type: 'sunburst',

        data: data,
        radius: [0, '95%'],
        sort: undefined,

        emphasis: {
          focus: 'ancestor'
        },

        levels: [
          {},
          {
            r0: '15%',
            r: '35%',
            itemStyle: {
              borderWidth: 2
            },
            label: {
              rotate: 'tangential'
            }
          },
          {
            r0: '35%',
            r: '70%',
            label: {
              align: 'right'
            }
          },
          {
            r0: '70%',
            r: '75%',
            label: {
              position: 'outside',
              padding: 3,
              silent: false
            },
            itemStyle: {
              borderWidth: 3
            }
          }
        ]
      }
    };

    option && myChart.setOption(option);

  }
}
</script>

<style scoped>
#sun{
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