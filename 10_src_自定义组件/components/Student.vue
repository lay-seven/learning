<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <button v-on:click="sendStudentName">点我发送学生名</button>
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
  methods:{
    sendStudentName() {
      // this.$emit('click')
      console.log('Student');
    }
  }
};
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;

}
</style>