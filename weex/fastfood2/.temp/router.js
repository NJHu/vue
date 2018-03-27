import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/pages/main')
    }
  ]
})
