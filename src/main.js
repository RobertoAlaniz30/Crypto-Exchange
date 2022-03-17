import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css"
import router from "@/router.js"
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'



createApp(App).use(router).use(VueChartkick).mount('#app')
