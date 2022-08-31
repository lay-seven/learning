<template>
  <div>
    <h2>我是鼠鼠</h2>
  </div>
</template>

<script>
export default {
    name:'Home',
    // 组件切走时，不再显示的组件会被销毁
    mounted(){
      console.log('鼠鼠remake喽');
    },
    beforeDestroy() {
      console.log('鼠鼠被销毁喽');
    }
}
</script>