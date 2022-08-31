<template>
  <div>
    <h1 ref="title">欢迎来到深带学习！！！</h1>
    <button ref="btn" @click="showDOM">点我输出DOM元素</button>
    <school ref="sch"></school>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
export default {
    name:"App",
    components:{School},
    methods: {
        showDOM() {
            console.log(this.$refs.title);//真实DOM元素
            console.log(this.$refs.btn);//真实DOM元素
            console.log(this.$refs.sch);// School组件的实例对象
        }
    },
}
</script>

<style>

</style>