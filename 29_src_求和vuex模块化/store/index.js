// 创建store
import Vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';
import { nanoid } from 'nanoid';
Vue.use(Vuex);

const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            // console.log(state,value);
            state.sum += value;
            // console.log(state.sum);
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0, // 当前的和
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

const personListStore = {
    namespaced: true,
    actions: {
        addPersonServer(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=socioal').then(
                response => { 
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('ADD被调用了');
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {

    },
}
// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personListStore
    }
});