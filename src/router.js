import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/portfolio',
      component: Portfolio,
    }
  ]
})