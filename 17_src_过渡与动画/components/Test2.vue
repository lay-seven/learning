<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 此处加appear为打开页面就使用一次动画 -->
    <!-- name为了标识不同的动画 -->
    <!-- transition-group可以使用多个元素，但其中元素需具有不同的key值 -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" :key="1">动画效果</h1>
      <h1 v-show="isShow" :key="2">尚硅谷</h1>
    </transition-group>
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

.hello-enter-active,
.hello-leave-active {
  transition: 1s;
}

/* 简化写法 */
.hello-enter,
.hello-leave-to {
  /* 进入的起点，离开的终点 */
  transform: translateX(-100%);
}



.hello-enter-to,
.hello-leave {
  /* 进入的终点，离开的起点 */
  transform: translateX(0);
}

/* .hello-leave {
   离开的起点 
  transform: translateX(0);
}

.hello-leave-to {
   离开的终点 
  transform: translateX(-100%);
} */

/* @keyframes atguigu {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(0px);
  }
} */
</style>