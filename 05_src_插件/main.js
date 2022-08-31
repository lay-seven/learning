// 引入Vue
import Vue from 'vue'
import App from './App.vue'
// 引入App
Vue.config.productionTip = false;

// 引入插件
import plugins from './plugins'
// 使用插件
Vue.use(plugins,1,2,3)

new Vue({
  el: '#app',
  render: h => h(App)

})