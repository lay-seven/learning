<template>
  <div>
    <h1>{{}}</h1>
    <School></School>
    <Student @click.native="show"></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:"App",
    components:{Student,School},
    methods:{
      show() {
        console.log(123);
      }
    }
    
}
</script>

<style>
  .app{
    background-color: gray;
  }
  
</style>