<template>
  <div>
    <ul>
      <li>news001 <input type="text" v-model="news"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news:'',
    }
  },
};
</script>