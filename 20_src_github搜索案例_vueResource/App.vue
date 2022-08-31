<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Search from "./components/Search.vue";
// 引入School组件


export default {
  components: { List, Search },
  name: "App",
  methods: {},
};
</script>
