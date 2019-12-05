import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import Router from './router'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = true;

Vue.use(Element);
new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app');