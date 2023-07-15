import DefaultLayoutVue from '@/layout/DefaultLayout.vue'

export const newsRouter = [
  {
    path: '/tin-tuc',
    name: 'News',
    meta: {
      layout: DefaultLayoutVue
    },
    component: () => import('@/pages/NewsView.vue')
  },
  {
    path: '/chi-tiet-tin-tuc',
    name: 'DetailNews',
    meta: {
      layout: DefaultLayoutVue
    },
    component: () => import('@/pages/NewsView.vue')
  }
]
