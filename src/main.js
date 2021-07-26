import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')
