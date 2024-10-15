import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProductListView from '../views/ProductListView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'products',
      component: ProductListView
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: NotFoundView
    },
    {
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
