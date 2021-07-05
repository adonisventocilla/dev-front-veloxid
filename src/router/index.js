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
import Orders from '@/components/admin/Order'
import OrdersConfirmation from '@/components/admin/OrderConfirmation'

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
      path: '/vehiculos/:id',
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
    },
    {
      path: '/pedidos',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/confirmacionconductor',
      name: 'OrdersConfirmation',
      component: OrdersConfirmation
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.fullPath === '/home') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.fullPath === '/conductores') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.name === 'Vehicle') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.fullPath === '/evaluacion') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.fullPath === '/revisiones') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.fullPath === '/revisionesdetalle') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.fullPath === '/usuarios') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '4') {
      next(from)
    }
  }

  if (to.fullPath === '/tracking') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '1') {
      next(from)
    }
  }

  if (to.fullPath === '/pedidos') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '3') {
      next(from)
    }
  }

  if (to.fullPath === '/confirmacionconductor') {
    if (Cookies.get('userLogged') === undefined) {
      next('/login')
    }
    if (Cookies.get('rolLogged') !== '2') {
      next(from)
    }
  }

  next()
})

export default routes
