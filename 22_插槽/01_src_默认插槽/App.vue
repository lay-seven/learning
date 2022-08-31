<template>
  <div class="container">
    <Category title="美食" :listData="foods"></Category>
    <Category title="游戏" :listData="games"></Category>
    <Category title="电影" :listData="films"></Category>
  </div>
</template>

<script>
import Category from "./components/Category";
// import Search from "./components/Search.vue";
// 引入School组件

export default {
  components: { Category },
  name: "App",
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "原神", "黄油"],
      films: ["言叶之庭", "你的名字", "天气之子", "你好世界"],
    };
  },
  methods: {},
};
</script>


<style lang="css">
.container {
  display: flex;
  justify-content: space-around;
}
</style>
