<template>
  <div>
    <h2>我是百京爷</h2>
  </div>
</template>

<script>
export default {
    name:'About',
    beforeCreate() {
      console.log('百京爷来了');
    },
    beforeDestroy() {
      console.log('百京爷先走了');
    }
}
</script>