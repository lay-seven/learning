// 改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name:'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                { path: 'news', component: News },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name:'xiangqing',
                            path: 'detail/',// 使用占位符声明接收params参数
                            component: Detail,

                            // props的第一种写法 传递死数据
                            // props: { a: 1, b: 'hello' }
                            
                            // 第二种写法 设置为true，将该路由组件收到的所有params参数以props的形式传给该组件
                            // props:true

                            // 第三种写法 高端 值为函数 以props形式传给组件
                            props({query:{id,title}}) { // 拿到参数就解构赋值
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