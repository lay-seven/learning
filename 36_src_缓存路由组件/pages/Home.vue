<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/News">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // 组件切走时，不再显示的组件会被销毁
  // 但是可以使用keep-alive续命，使用include配置需要缓存的组件
  // mounted(){
  //   console.log('鼠鼠remake喽');
  // },
  // beforeDestroy() {
  //   console.log('鼠鼠被销毁喽');
  // }
};
</script>