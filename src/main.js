import Vue from 'vue'
import App from './App.vue'
import VueScroLoad from './lib/index.js'
Vue.use(VueScroLoad)
new Vue({
  el: '#app',
  render: h => h(App)
})
