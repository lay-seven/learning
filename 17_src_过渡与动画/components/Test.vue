<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 此处加appear为打开页面就使用一次动画 -->
    <!-- name为了标识不同的动画 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">动画效果</h1>
    </transition>
  </div>
</template>

<script>
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
h1 {
  background-color: skyblue;
}

.hello-enter-active {
  animation: atguigu 1s;
}

.hello-leave-active {
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(0px);
  }
}
</style>