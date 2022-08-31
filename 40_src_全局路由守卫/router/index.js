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
                    meta: { isAuth: true,title:'新闻' }
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

// 全局前置路由守卫：初始化或每次路由切换之前调用
router.beforeEach((to, from, next) => {
    // console.log(to,from);
    console.log('@');
    // if (to.path === '/home/news' || to.path === '/home/message') {
    if (to.meta.isAuth) { // 判断是否需要鉴定权限
        if (localStorage.getItem('school') === 'atguigu1') {
            next();
        } else {
            alert('学校名称不对，无法查看')
        }
    } else {
        next();
    }
})

// 全局后置路由守卫：初始化或每次路由切换之前调用
router.afterEach((to, from) => {
    // console.log(to, from);
    document.title = to.meta.title || '硅谷系统'
})

export default router