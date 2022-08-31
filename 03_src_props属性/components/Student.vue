<template>
  <div class="demo">
    <h2>学生名称{{name}}</h2>
    <h2>学生性别{{gender}}</h2>
    <h2>学生年龄{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:"School",
    data() {
        return {
            

        }
    },
    props:['name','gender','age'],
}
</script>

<style>
    .demo {
        background-color: pink;
    }
</style>