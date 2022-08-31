<template>
  <div>
    <h1>当前求和为：{{ countOptions.sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h1>下方组件的总人数是：{{personListStore.personList.length}}</h1>
    <h1>我在{{ countOptions.school }}，学习{{ countOptions.subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数据
    };
  },
  computed: {
    // mapState方法，自动去$store.state找数据，将其映射为计算属性(对象写法)
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    // 数组写法
    ...mapState(["countOptions", "personListStore"]),
    // ...mapState("countOptions", "personListStore"),
    
    ...mapGetters('countOptions',["bigSum"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // 使用mapMutations生成对应方法，方法中会调用commit
    ...mapMutations('countOptions',{increment:'JIA',decrement:'JIAN'}),

    /* ******************************************************* */
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    // 使用mapActions生成对应方法，方法中会调用dispatch
    ...mapActions('countOptions',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>