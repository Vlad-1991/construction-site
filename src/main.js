import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import  './css/swiper-bundle.min.css'
import './css/magnific-popup.min.css'
import './css/style.css'
import './css/animate.css'
import './fonts/stylesheet.css'

createApp(App).use(store).use(router).mount('#app')
