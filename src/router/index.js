import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'登录',
            component:Login,
        },{
            path:'/home',
            name:'',
            component:Home,
        }, {
            path: '/home',
            component: Home,
            name: '文章管理',
            iconCls: 'fa fa-file-text-o',
            children: [
                {
                    path: '/articleList',
                    name: '文章列表',
                    component: Home,
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
        }
    ]
})