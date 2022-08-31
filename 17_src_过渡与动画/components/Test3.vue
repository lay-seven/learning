<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 此处加appear为打开页面就使用一次动画 -->
    <!-- name为了标识不同的动画 -->
    <!-- transition-group可以使用多个元素，但其中元素需具有不同的key值 -->
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" :key="1">动画效果</h1>
      <div v-show="isShow" :key="2" class="demo">尚硅谷</div>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
  .demo{
    font-size: 40px;
    width: 200px;
    height: 80px;
    /* background-color: pink; */
    text-align: center;
    line-height: 80px;
  }
</style>