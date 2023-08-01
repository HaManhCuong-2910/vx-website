<template>
  <div class="mt-215">
    <IntroSlideProjectComponent />
  </div>
  <div class="mt-68">
    <SlideBrandComponent v-if="!isMobile()" />
    <SlideBrandMobileComponent v-else />
  </div>
  <div class="mt-175 container-custom mx-auto">
    <IntroSearchNewsComponentVue />
  </div>
  <div class="mt-188 container-custom mx-auto">
    <ListNewsComponentVue />
    <div class="lg:mt-[137px] mt-[85px] flex justify-center">
      <PaginationComponentVue />
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
