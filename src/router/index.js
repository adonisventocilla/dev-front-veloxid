import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/front/Home'
import Dashboard from '@/components/admin/Dashboard'
import Driver from '@/components/admin/Driver'
import Vehicle from '@/components/admin/Vehicle'
import UserAdmin from '@/components/admin/UserAdmin'
import History from '@/components/admin/RevisionHistory'
import Evaluation from '@/components/admin/Evaluation'
import RevisionDetail from '@/components/admin/RevisionDetail'
import Cotization from '@/components/front/Cotization'
import Tracking from '@/components/admin/Tracking'

Vue.use(Router)

const routes = new Router({
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
      path: '/vehicles/:id',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/evaluacion',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/revisionesdetalle',
      name: 'RevisionDetail',
      component: RevisionDetail
    },
    {
      path: '/revisiones',
      name: 'History',
      component: History
    },
    {
      path: '/usuarios',
      name: 'Users',
      component: UserAdmin
    },
    {
      path: '/cotizacion',
      name: 'Cotization',
      component: Cotization
    },
    {
      path: '/tracking',
      name: 'Tracking',
      component: Tracking
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.fullPath === '/home') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/conductores') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.name === 'Vehicle') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/evaluacion') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/vehicles') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/revisiones') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/revisionesdetalle') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/usuarios') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }

  if (to.fullPath === '/tracking') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
  }
  if (to.fullPath === '/login') {
    if (Cookies.get('userLogged')) {
      next('/home')
    }
  }
  next()
})

export default routes
