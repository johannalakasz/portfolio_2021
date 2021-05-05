import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zine',
    name: 'Zine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Zine.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/idphotos',
    name: 'Idphotos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Idphotos.vue')
  },
  {
    path: '/jealousy',
    name: 'Jealousy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Jealousy.vue')
  },
  {
    path: '/logo',
    name: 'Logo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
