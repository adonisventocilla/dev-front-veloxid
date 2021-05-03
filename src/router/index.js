import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/front/Home'
import Dashboard from '@/components/admin/Dashboard'
import Driver from '@/components/admin/Driver'
import Vehicle from '@/components/admin/Vehicle'
import UserAdmin from '@/components/admin/UserAdmin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registrar',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/conductores',
      name: 'Driver',
      component: Driver
    },
    {
      path: '/vehicles',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/usuarios',
      name: 'UserAdmin',
      component: UserAdmin
    }
  ]
})
