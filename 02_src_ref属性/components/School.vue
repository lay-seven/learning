<template>
  <div class="demo">
    <h2>学校名称{{name}}</h2>
    <h2>学校地址{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:"School",
    data() {
        return {
            name:'深圳大学',
            address:'深圳'

        }
    },
}
</script>

<style>
    .demo {
        background-color: pink;
    }
</style>