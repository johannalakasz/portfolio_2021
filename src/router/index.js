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
    name: 'Poetry zine',
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
    name: 'ID photos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Idphotos.vue')
  },
  {
    path: '/jealousy',
    name: 'Jealousy project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Jealousy.vue')
  },
  {
    path: '/logo',
    name: 'Logo design',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logo.vue')
  },
  {
    path: '/illustration',
    name: 'Illustrations',
    component: () => import(/* webpackChunkName: "about" */ '../views/Illustration.vue')
  },
  {
    path: '/packaging',
    name: 'Package design',
    component: () => import(/* webpackChunkName: "about" */ '../views/Packaging.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
