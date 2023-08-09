<template>
  <div class="mt-215">
    <IntroSlideProjectComponent />
  </div>
  <div class="mt-68">
    <SlideBrandComponent v-if="!isMobile()" />
    <SlideBrandMobileComponent v-else />
  </div>
  <div class="mt-175 container-custom mx-auto">
    <IntroSearchNewsComponentVue :data="dataFilter" />
  </div>
  <div class="mt-188 container-custom mx-auto">
    <ListNewsComponentVue :data="data.listData" />
    <div class="lg:mt-[137px] mt-[85px] flex justify-center">
      <PaginationComponentVue :page="data.page" :count="data.count" />
    </div>
  </div>
  <div class="lg:mt-[281px] mt-[158px] lg:pb-[149px]">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import IntroSlideProjectComponent from '@/components/project/IntroSlideProjectComponent.vue'
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'

import SlideBrandMobileComponent from '@/components/common/mobile/SlideBrandMobileComponent.vue'
import IntroSearchNewsComponentVue from '@/components/news/IntroSearchNewsComponent.vue'
import ListNewsComponentVue from '@/components/news/ListNewsComponent.vue'
import PaginationComponentVue from '@/components/common/PaginationComponent.vue'
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
import { isMobile } from '@/constant/helper'
import { onMounted, reactive, watch, ref } from 'vue'
import { getListFilter, getListNewsApi } from '@/api/news/index'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const data = reactive({
  count: 1,
  page: 1,
  listData: null
})
const dataFilter = ref<any>()
const handleGetListNews = async () => {
  store.commit('setLoadingGlobal', true)
  const query = route.query
  const [[res, err], [resFilter, errFilter]] = await Promise.all([
    getListNewsApi(query),
    getListFilter()
  ])
  data.count = res.count
  data.page = res.page
  data.listData = res.data
  dataFilter.value = resFilter.data
  store.commit('setLoadingGlobal', false)
}

watch(
  () => route.query,
  async () => {
    await handleGetListNews()
  }
)

onMounted(async () => {
  if (Object.keys(route.query).length === 0) {
    router.replace({
      path: route.path,
      query: {
        page: 1
      }
    })
  } else {
    await handleGetListNews()
  }
})
</script>

<style scoped lang="scss">
.mt-215 {
  margin-top: 215px;
}
.mt-68 {
  margin-top: 68px;
}
.mt-175 {
  margin-top: 175px;
}
.mt-188 {
  margin-top: 188px;
}
// .mt-137 {
//   margin-top: 137px;
// }

@media screen and (max-width: 992px) {
  .mt-175 {
    margin-top: 63px;
  }

  .mt-188 {
    margin-top: 47px;
  }
}
</style>
