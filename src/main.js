import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import Router from './router'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = true;

Vue.use(Element);
const router=Router;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
//等价于上面那种
// Window.bus=new Vue();
// new Vue({
//   el:'#app',
//   Router,
//   template:'<App></App>',
//   components:{
//     App
//   }
// });