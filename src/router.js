import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/practice-ajax',
      name: 'Practice-Ajax',
      component: () => import('./views/PracticeAjax.vue')
    }
  ]
})
