<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name: "我是深带学子",
      gender: "男",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: pink;
}
</style>