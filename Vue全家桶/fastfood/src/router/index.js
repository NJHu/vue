//
// 安装vue-router
// vue-router是一个插件包，所以我们还是需要用npm来进行安装的。打开命令行工具，进入你的项目目录，输入下面命令。
// npm install vue-router --save-dev

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '*',
      component: () => import('../components/Error')
    },
    {
      path: '/',
      redirect: '/tabbar'
    },
    {
      path: '/tabbar',
      component: () => import('../components/TabBar'),
      children: [
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('../components/Home'),
          beforeEnter: (to, from, next) => {
            console.log('====我进入了params模板')
            console.log(to)
            console.log(from)
            next()
          }
        },
        {
          path: 'message',
          component: () => import('../components/Message'),
          children: [
            {
              path: '/',
              components: {
                default: () => import('../components/Message'),
                left: () => import('../pages/Page02'),
                right: () => import('../pages/Page03')
              }
            }
          ]
        },
        {
          path: 'new',
          // name: 'new',
          component: () => import('../components/New'),
          children: [
            {
              path: '/',
              redirect: 'page02'
              // component: () => import('../components/New')
            },
            {
              path: 'page02',
              name: 'page02',
              component: () => import('../pages/Page02')
            },
            {
              path: 'page03',
              name: 'page03',
              component: () => import('../pages/Page03')
            }
          ]
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('../components/Me')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login')
    },
    {
      path: '/vuexlearn',
      name: 'viexlearn',
      component: () => import('../pages/VuexLearn')
    },
    {
      path: '/page01',
      name: 'page01',
      component: () => import('../pages/Page01')
    }
  ]
})

// 路由拦截， 跳转之前进行处理
router.beforeEach((to, from, next) => {
  // console.log('beforeEachbeforeEachbeforeEach')
  // console.log('to ======')
  // console.log(to)
  // console.log('from ======')
  // console.log(from)
  // console.log('=============')
  next()
})

// 路由拦截， 跳转之后进行处理
router.afterEach((to, from) => {
  // console.log('afterEachafterEachafterEach')
  // console.log('to ======')
  // console.log(to)
  // console.log('from ======')
  // console.log(from)
  // console.log('=============')
})

export default router
