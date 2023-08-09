<template>
  <div class="bg-white" v-if="data">
    <div class="banner">
      <img :src="`${BaseURLImage}${data.imgs}`" />
    </div>
    <div class="lg:container container-custom mx-auto">
      <IntroDetailNewsComponentVue :data="data" />
      <div class="lg:pt-[34px] pt-[52px] lg:pb-[30px] pb-[24px]">
        <LineAnimateComponent :color="'rgba(0, 0, 0, 0.10)'" />
      </div>
      <ContentDetailNewComponentVue :data="data" />
      <div class="lg:mt-[77px] mt-[56px]">
        <RelatedArticlesComponentVue />
      </div>
    </div>
    <div class="lg:mt-[185px] mt-[126px] container-custom mx-auto">
      <LineAnimateComponent :color="'rgba(0, 0, 0, 0.10)'" />
    </div>
    <div class="lg:mt-[110px] mt-[35px]">
      <IntroSlideProjectComponent :theme="'dark'" :hideMarginTop="isMobile()" />
    </div>
    <div class="lg:mt-[71px] mt-[18px] lg:pb-[152px] pb-[100px]">
      <SlideBrandComponent v-if="!isMobile()" />
      <SlideBrandMobileComponent v-else :theme="'dark'" />
    </div>
  </div>
  <div class="lg:mt-[105px] mt-[60px] lg:pb-[149px]">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import ContentDetailNewComponentVue from '@/components/detail-news/ContentDetailNewComponent.vue'
import IntroDetailNewsComponentVue from '@/components/detail-news/IntroDetailNewsComponent.vue'
import RelatedArticlesComponentVue from '@/components/detail-news/RelatedArticlesComponent.vue'
import LineAnimateComponent from '@/components/util/LineAnimateComponent.vue'
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'
import SlideBrandMobileComponent from '@/components/common/mobile/SlideBrandMobileComponent.vue'
import IntroSlideProjectComponent from '@/components/project/IntroSlideProjectComponent.vue'
import { isMobile } from '@/constant/helper'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getDetailNewsApi } from '@/api/news'
import { useStore } from 'vuex'
import { BaseURLImage } from '@/constant/constant'
const route = useRoute()
const store = useStore()
const data = ref<any>(null)
watch(
  () => route.params.id,
  async () => {
    store.commit('setLoadingGlobal', true)
    const [res, error] = await getDetailNewsApi(route.params.id as string)
    data.value = res.data
    store.commit('setLoadingGlobal', false)
  }
)

onMounted(async () => {
  store.commit('setLoadingGlobal', true)
  const [res, error] = await getDetailNewsApi(route.params.id as string)
  data.value = res.data
  store.commit('setLoadingGlobal', false)
})
</script>

<style scoped lang="scss">
.banner {
  height: 1080px;
  img {
    width: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 992px) {
  .banner {
    padding-top: 95px;
    background-color: #3939e5;
    height: auto;
    img {
      height: 212px;
    }
  }
}
</style>
