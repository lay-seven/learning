<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.aiguigu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.aiguigu.com">单机游戏</a>
        <a href="http://www.aiguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.aiguigu.com">网络游戏</a>
          <a href="http://www.aiguigu.com">网络游戏</a>
        </div>
        <h4>欢迎前来观看</h4>
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
h4{
  text-align: center;
}
</style>
