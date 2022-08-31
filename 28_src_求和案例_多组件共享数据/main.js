// 引入Vue
import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'

// 引入store
import store from './store/index';

// import Vuex from 'vuex'
// 引入App
Vue.config.productionTip = false;

// Vue.use(vueResource)



new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
})