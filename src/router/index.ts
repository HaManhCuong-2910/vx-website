import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayoutVue from '@/layout/DefaultLayout.vue'
import { newsRouter } from './news-router'

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
    },
    {
      path: '/ve-chung-toi',
      name: 'aboutUs',
      meta: {
        layout: DefaultLayoutVue
      },
      component: () => import('@/pages/AboutUsView.vue')
    },
    {
      path: '/dich-vu',
      name: 'Service',
      meta: {
        layout: DefaultLayoutVue
      },
      component: () => import('@/pages/ServiceView.vue')
    },
    {
      path: '/du-an',
      name: 'Project',
      meta: {
        layout: DefaultLayoutVue
      },
      component: () => import('@/pages/ProjectView.vue')
    },
    {
      path: '/lien-he',
      name: 'Contact',
      meta: {
        layout: DefaultLayoutVue
      },
      component: () => import('@/pages/ContactView.vue')
    },
    {
      path: '/tuyen-dung',
      name: 'Recruitment',
      meta: {
        layout: DefaultLayoutVue
      },
      component: () => import('@/pages/RecruitmentView.vue')
    },
    ...newsRouter
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
