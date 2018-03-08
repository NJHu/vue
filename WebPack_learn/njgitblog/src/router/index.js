import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '*',
      component: () => import('../pages/Error')
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      // name: 'home',
      component: () => import('../pages/Home'),
      children: [
        {
          path: '/',
          name: 'home',
          components: {
            // default 占位用
            default: () => import('../pages/Home'),
            poscontent: () => import('../components/Pos')
          }
        }
      ]
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
  document.title = to.name
  // to.meta.title = to.name
  next()
})

// 路由拦截， 跳转之后进行处理
router.afterEach((to, from) => {
  // console.log('afterEachafterEachafterEach')
  // console.log('to ======')
  // console.log(to)
  // console.log('from ======')
  // console.log(from)
})

export default router
