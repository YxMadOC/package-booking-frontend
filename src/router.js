import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: '/list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          path: '/add',
          name: 'add',
          component: () => import('./views/Add.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('./views/Order.vue')
        }
      ]
    }
  ]
})
