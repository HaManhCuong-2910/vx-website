import router from '@/router'
import 'ant-design-vue/dist/antd.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import '@/utils/LoadingRouter'
import Antd from 'ant-design-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from '@/store'
import VueCookies from 'vue3-cookies'
import ScrollReveal from 'scrollreveal'

import '@/assets/css/base.scss'
import '@/assets/css/font.css'
import '@/assets/css/tailwind.css'
import 'swiper/css'

library.add(fas, fab, far)
export function registerGlobalComponent(app: any) {
  app
    .use(store)
    .use(router)
    .use(Antd)
    .use(ElementPlus)
    .use(ScrollReveal)
    .use(VueCookies, { expires: '30d' })
    .component('font-awesome-icon', FontAwesomeIcon)

  app.mount('#app')
}
