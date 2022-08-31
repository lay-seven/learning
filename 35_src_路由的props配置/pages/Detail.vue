<template>
  <ul>
    <li>消息编号:{{id}}</li>
    <li>消息标题:{{$route.params.title}}</li>
    <li>a:{{id}}</li>
    <li>b:{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title']
}
</script>