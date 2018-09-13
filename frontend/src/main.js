import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import './registerServiceWorker'
import axios from 'axios'

const PORT = process.env.NODE_ENV !== 'production' ? '//localhost:3000' : '/';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
