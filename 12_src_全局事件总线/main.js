// 引入Vue
import Vue from 'vue'
import App from './App.vue'
// 引入App
Vue.config.productionTip = false;

// const demo = Vue.extend({});
// const d = new demo();

// Vue.prototype.x = d;

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;// 安装全局事件总线
  },

})