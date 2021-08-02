import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: ['/home', '/homePage'],
    component: Home,
    // redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/numberPage',
    name: 'NumberPage',
    component: () => import(/*  */ '../views/NumberPage.vue') 
  },
  {
    path: '/user/:id?', // path可使用regex，加上?表示id為非必要參數
    name: 'User',
    props: true,
    component: () => import(/**/'../views/User.vue')
  }, {
    path: '/weather',
    name: 'Weather',
    component: () => import(/**/'../views/Weather.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
