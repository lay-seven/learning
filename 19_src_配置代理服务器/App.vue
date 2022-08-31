<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
// 引入School组件

import axios from 'axios'
export default {
  name: "App",
  methods:{

    getStudent() {
      // 代理服务器有需要请求的资源时不会请求服务器
      axios.get('http://localhost:8080/api/students').then(
        response => {
          console.log('请求成功',response.data);
        },
        error => {
          console.log('请求失败',error.message);
        }
      )
    }
  }
};
</script>
