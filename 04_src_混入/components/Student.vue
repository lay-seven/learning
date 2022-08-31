<template>
  <div class="demo">
    <h2 @click="showName">{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
  </div>
</template>

<script>
import { mixin } from "../mixin";

export default {
  name: "Student",
  data() {
    return {
      name: "我是深带学子",
      gender: "男",
    };
  },
  mixins: [mixin],
  // methods: {
  //   showName() {
  //     alert(this.name)
  //   }
  // },
};
</script>

<style>
.demo {
  background-color: pink;
}
</style>