import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: {
        keepAlive: false,
        showTabBar: false
      },
      component: () => import('@/views/ErrorView404.vue')
    }
  ],
})

export default router
