import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import customers from '../views/customers.vue'
import categories from '../views/categories.vue'
import pay_mode from '../views/pay_mode.vue'
import products from '../views/products.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customers',
    name: 'customers',
    component: customers
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/pay_mode',
    name: 'pay_mode',
    component: pay_mode
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
