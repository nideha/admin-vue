import Vue from 'vue'
import Router from 'vue-router'
// @是src路径的别名，webpack配置的   .vue 的后缀名可以省略
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'

// 用户管理组件
import UserList from '@/components/user-list/user-list'

// 角色列表组件
import RoleList from '@/components/role-list/role-list'

Vue.use(Router)

// 创建路由实例
const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      // 可以通过配置子路由的方式让某个组件渲染到父路由组件
      // 1.在父路由组件中添加<router-view></router-view>标记
      // 2.在父路由中通过children来声明子路由
      // children 是一个数组，配置一个一个子路由对象
      // 当你访问user-list组件的时候，则路由会先渲染它的父路由组件，然后将user-list组件渲染到父路由的router-view标记处
      children: [
        {
          name: 'user-list',
          path: '/users',
          component: UserList
        },
        {
          name: 'role-list',
          path: '/roles',
          component: RoleList
        }
      ]
    }
  ]
})

// 1.添加路由拦截器
// to 我要去哪里
// from 我从哪来的
// next 用来放行验证通过的 不调用不往后执行
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    const token = window.localStorage.getItem('admin-token')
    if (!token) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  }
})

// 导出路由实例
export default router
