import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
App.use(Router);
