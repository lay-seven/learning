// 引入Vue
import Vue from 'vue'
import App from './App.vue'
// 引入App
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  render: h => h(App)

})