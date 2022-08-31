<template>
  <div>
    <h1 ref="title">欢迎来到深带学习！！！</h1>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:"App",
    components:{Student,School},
    
}
</script>