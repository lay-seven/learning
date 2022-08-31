<template>
  <div>
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>


import Count from "./components/Count";
import Person from "./components/Person";
// import Search from "./components/Search.vue";
// 引入School组件

export default {
  components: { Count,Person },
  name: "App",
};
</script>
