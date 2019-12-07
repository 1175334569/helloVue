import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import ArticleList from '../components/ArticleList'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '登录',
            component: Login,
        }, {
            path: '/home',
            name: '',
            component: Home,
        }, {
            path: '/home',
            navMenu:true,
            component: Home,
            name: '文章管理',
            iconCls: 'fa fa-file-text-o',
            children: [
                {
                    path: '/articleList',
                    name: '文章列表',
                    component: ArticleList,
                    meta: {
                        keepAlive: true
                    }
                }, {
                    path: '/postArticle',
                    name: '发表文章',
                    component: Login,
                    meta: {
                        keepAlive: false
                    }
                }, {
                    path: '/blogDetail',
                    name: '博客详情',
                    component: Login,
                    hidden: true,
                    meta: {
                        keepAlive: false
                    }
                }, {
                    path: '/editBlog',
                    name: '编辑博客',
                    component: Login,
                    hidden: true,
                    meta: {
                        keepAlive: false
                    }
                }
            ]
        }, {
            path: '/home',
            navMenu:true,
            component: Home,
            name: '用户管理',
            children: [
                {
                    path: '/user',
                    iconCls: 'fa fa-user-o',
                    name: '用户管理',
                    component: Login
                }
            ]
        }, {
            path: '/home',
            navMenu:true,
            component: Home,
            name: '栏目管理',
            children: [
                {
                    path: '/cateMana',
                    iconCls: 'fa fa-reorder',
                    name: '栏目管理',
                    component: Login
                }
            ]
        }, {
            path: '/home',
            navMenu:true,
            component: Home,
            name: '数据统计',
            iconCls: 'fa fa-bar-chart',
            children: [
                {
                    path: '/charts',
                    iconCls: 'fa fa-bar-chart',
                    name: '数据统计',
                    component: Login
                }
            ]
        }
    ]
})