<template>
  <div>
    <hr>
    <h1>上方组件的求和为：{{sum}}</h1>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data() {
        return {
            name:'',
        }
    },
    computed:{
        ...mapState(['personList','sum']),
    },
    methods:{
        ...mapMutations(['ADD_PERSON']),
        addPerson(){
            const personObj = {id:nanoid(),name:this.name};
            console.log(personObj);
            this.name = '';
            this.ADD_PERSON(personObj);
        },
        
    }
}
</script>

<style>

</style>