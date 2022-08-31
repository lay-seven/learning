<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <input type="text" v-fbind:value="name">
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

<style>
.demo {
  background-color: pink;
}
</style>