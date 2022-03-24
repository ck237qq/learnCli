import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginUser.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
