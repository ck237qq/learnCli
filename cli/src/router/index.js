import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: '/',
        name: 'login',
        component: () => import('../views/LoginUser.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
