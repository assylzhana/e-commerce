import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Review from './pages/Review.vue'
import NewProduct from './pages/NewProduct.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/review',
      component: Review
    },
    {
      path: '/new-product',
      component: NewProduct
    },
  ]
})

export default router
