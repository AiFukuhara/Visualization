import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'



const app = createApp(App)
//echarts
import * as ECharts from 'echarts'
app.config.globalProperties.$ECharts = ECharts


app.use(router)
app.use(ElementPlus)
app.mount('#app')








