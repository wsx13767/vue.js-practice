import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')
