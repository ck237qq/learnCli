import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/js/bootstrap.bundle'

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
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginUser.vue')
      },
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
