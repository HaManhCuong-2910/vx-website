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
    path: '/chi-tiet-tin-tuc/:id',
    name: 'DetailNews',
    meta: {
      layout: DefaultLayoutVue
    },
    component: () => import('@/pages/NewsDetail.vue')
  }
]
