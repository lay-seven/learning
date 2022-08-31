<template>
  <div>
    <h1 ref="title">欢迎来到深带学习！！！</h1>
    <Student name='张三' gender='男' age="18"></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
export default {
    name:"App",
    components:{Student},
    
}
</script>

<style>

</style>