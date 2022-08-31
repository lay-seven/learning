// 引入Vue
import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)

// import VueRouter from 'vue-router'

// 引入路由器
// import router from './router'


// import Vuex from 'vuex'
// 引入App
Vue.config.productionTip = false;

// Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  // router,
})