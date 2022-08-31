<template>
  <div class="school">
    <h2>学校的名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "深带@@@@@@",
      address:'深圳'
    };
  },
  mounted() {
    this.$bus.$on('hello',(data) => {
      console.log('我是学校，收到了学生信息',data);
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>