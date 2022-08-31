<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="atguigu">
        <ol>
          <li style="color:red" v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="atguigu">
        <h4 v-for="(g, index) in atguigu.games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
// import Search from "./components/Search.vue";
// 引入School组件

export default {
  components: { Category },
  name: "App",

  methods: {},
};
</script>


<style lang="css">
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
.foot {
  /* text-align: center; */
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
