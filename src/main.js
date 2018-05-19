import Vue from 'vue'
import App from './App.vue'
import scroload from './lib/index.js'
Vue.use(scroload)

new Vue({
  el: '#app',
  render: h => h(App)
})
