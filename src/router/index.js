import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Test from '../components/Test'
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
            component:Test,
        }
    ]
})