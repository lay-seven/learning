// 改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            // meta: { title: '关于' }
        },
        {
            name: 'mainPage',
            path: '/home',
            component: Home,
            meta: { title: '家' },
            children: [
                {
                    // name:'',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // 此乃独享路由配置 独享路由守卫只有前置没有后置
                    // beforeEnter: (to,from,next) => {
                    //     if (localStorage.getItem('school' === '123')) {
                    //         next();
                    //     } else {
                    //         alert('权限不足')
                    //     }
                    // },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { title: '消息' },

                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/',// 使用占位符声明接收params参数
                            component: Detail,
                            meta: { title: '详情' },

                            // props的第一种写法 传递死数据
                            // props: { a: 1, b: 'hello' }

                            // 第二种写法 设置为true，将该路由组件收到的所有params参数以props的形式传给该组件
                            // props:true

                            // 第三种写法 高端 值为函数 以props形式传给组件
                            props({ query: { id, title } }) { // 拿到参数就解构赋值
                                // console.log($route);
                                return {
                                    id,
                                    title
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})

// 独享路由

export default router