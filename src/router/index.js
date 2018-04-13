import Vue from 'vue'
import Router from 'vue-router'
// @是src路径的别名，webpack配置的   .vue 的后缀名可以省略
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})
