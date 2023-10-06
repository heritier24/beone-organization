import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home-admin',
    name: 'HomeAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeAdmin.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/what-we-do',
    name: 'WhatWeDoView',
    component: () => import('../views/WhatWedo.vue')
  },
  {
    path: '/clients-trusted-us-admin',
    name: 'ClientsTrusted',
    component: () => import('../views/ClientsTrusted.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
