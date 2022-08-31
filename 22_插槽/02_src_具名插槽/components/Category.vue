<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot name="center">插槽1</slot>
    <slot name="footer">插槽2</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title'],
    
}
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
        /* text-align: center; */
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>