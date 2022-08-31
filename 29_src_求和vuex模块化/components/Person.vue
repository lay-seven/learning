<template>
  <div>
    <hr>
    <h1>上方组件的求和为：{{countOptions.sum}}</h1>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="send">发送请求</button>
    <ul>
        <li v-for="p in personListStore.personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapMutations, mapState,mapActions} from 'vuex'
// import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data() {
        return {
            name:'',
        }
    },
    computed:{
        ...mapState(['personListStore','countOptions']),
    },
    methods:{
        ...mapMutations('personListStore',['ADD_PERSON']),
        addPerson(){
            const personObj = {id:nanoid(),name:this.name};
            console.log(personObj);
            this.name = '';
            this.ADD_PERSON(personObj);
        },
        ...mapActions('personListStore',{send:'addPersonServer'})
        
    }
}
</script>

<style>

</style>