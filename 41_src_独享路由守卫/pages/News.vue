<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习</li>
      <li>news001 <input type="text" v-model="news" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: "",
      opacity: 1,
    };
  },
  activated() {
    console.log("activated");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      // console.log('@');
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log("deactivated");
    clearInterval(this.timer);
  },
  mounted() {
    console.log("Mounted");
  },
  beforeDestroy() {},
};
</script>