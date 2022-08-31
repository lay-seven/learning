<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始跳转方式 -->
          <!-- <a class="list-group-item" href="./about.html">About</a> -->
          <!-- <a class="list-group-item active" href="./home.html">Home</a> -->

          <!--  -->
          <!-- 使用命名方式代替path -->
          <router-link replace="" class="list-group-item" active-class="active" :to="{name:'guanyu'}"
            >About</router-link
          >
          <router-link replace class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由器视图，指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";

export default {
  components: { Banner },
  name: "App",
};
</script>

<style>
body {
  background-image: url("../src/assets/preview/preview.jpg");
}
</style>