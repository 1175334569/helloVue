import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '登录',
            component: Login,
        }, {
            path: '/home',
            component: Home,
            navMenu: true,
            children: [
                {
                    path:'/',
                    name: '文章管理',
                    children: [
                        {
                            path: '/articleList',
                            name: '文章列表',
                            component: Login,
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: '/postArticle',
                            name: '发表文章',
                            component: Home,
                            meta: {
                                keepAlive: false
                            }
                        }
                    ]
                },{
                    path:'/',
                    name:'博客管理',
                    children:[{
                           path:'/alijl',
                           name:'数据分析',
                           component:Home,
                    }]
                }


            ]
        }
    ]
})