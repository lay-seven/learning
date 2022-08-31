<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "原神", "黄油"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
  /* text-align: center; */
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>