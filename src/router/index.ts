import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayoutVue from '@/layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: DefaultLayoutVue
      },
      component: () => import('@/pages/HomeView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
