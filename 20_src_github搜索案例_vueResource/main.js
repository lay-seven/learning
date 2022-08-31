// 引入Vue
import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// 引入App
Vue.config.productionTip = false;

Vue.use(vueResource)



new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
})