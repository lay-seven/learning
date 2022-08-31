// 创建store
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
// 准备actions：用于响应组件中的动作
const actions = {
    // 太过鸡肋，直接越过
    // jia(context, value) {
    //     context.commit('JIA', value)
    //     // console.log('actions中的jia被调用了');
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500)

    },
}
// 准备mutations：用于操作数据
const mutations = {
    JIA(state, value) {
        // console.log(state,value);
        state.sum += value;
        // console.log(state.sum);
    },
    JIAN(state, value) {
        state.sum -= value;
    },
}
// 准备state：用于存储数据
const state = {
    sum: 0, // 当前的和
    school: '尚硅谷',
    subject:'前端'
}
// 准备getters 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});