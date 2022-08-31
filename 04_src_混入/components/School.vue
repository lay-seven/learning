<template>
  <div class="demo">
    <h2 @click="showName">学校的名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 引入混合
import {mixin} from '../mixin'
export default {
  name: "School",
  data() {
    return {
      name: "深带",
      address:'深圳'
    };
  },
  mixins:[mixin],
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