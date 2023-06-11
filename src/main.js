import { createApp } from 'vue'
import App from './MainScreen.vue'
import router from './router'
import store from './store'
import VueApexCharts from "vue3-apexcharts"

createApp(App).use(store).use(VueApexCharts).use(router).mount('#app')
