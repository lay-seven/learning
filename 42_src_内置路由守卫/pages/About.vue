<template>
  <div>
    <h2>我是百京爷</h2>
  </div>
</template>

<script>
export default {
    name:'About',
    // beforeCreate() {
    //   console.log('百京爷来了');
    // },
    // beforeDestroy() {
    //   console.log('百京爷先走了');
    // },

    // 通过路由规则进入该组件前被调用
    beforeRouteEnter(to,from,next) {
      console.log('About被进入了');
      next();
    },
    // 通过路由规则离开该组件前被调用
    beforeRouteLeave(to,from,next) {
      console.log('从About出去了');
      next();
    },
}
</script>