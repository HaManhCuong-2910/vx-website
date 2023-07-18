<template>
  <div class="bg-white">
    <div class="banner">
      <img src="/img/brand_slide.png" />
    </div>
    <div class="container mx-auto">
      <IntroDetailNewsComponentVue />
      <div class="lg:pt-[34px] lg:pb-[30px]">
        <LineAnimateComponent :color="'rgba(0, 0, 0, 0.10)'" />
      </div>
      <ContentDetailNewComponentVue />
      <div class="lg:mt-[77px]">
        <RelatedArticlesComponentVue />
      </div>
    </div>
    <div class="lg:mt-[185px] container-custom mx-auto">
      <LineAnimateComponent :color="'rgba(0, 0, 0, 0.10)'" />
    </div>
    <div class="lg:mt-[110px]">
      <IntroSlideProjectComponent :theme="'dark'" />
    </div>
    <div class="lg:mt-[71px] lg:pb-[152px]">
      <SlideBrandComponent />
    </div>
  </div>
  <div class="lg:mt-[105px] lg:pb-[149px]">
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
import IntroSlideProjectComponent from '@/components/project/IntroSlideProjectComponent.vue'
</script>

<style scoped lang="scss">
.banner {
  height: 1080px;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
