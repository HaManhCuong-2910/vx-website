<template>
  <div class="mt-215">
    <IntroSlideProjectComponent />
  </div>
  <div class="mt-68">
    <SlideBrandComponent />
  </div>
  <div class="mt-175 container-custom mx-auto">
    <IntroSearchNewsComponentVue />
  </div>
  <div class="mt-188 container-custom mx-auto">
    <ListNewsComponentVue />
    <div class="lg:mt-[137px] flex justify-center">
      <PaginationComponentVue />
    </div>
  </div>
  <div class="lg:mt-[281px] lg:pb-[149px]">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import IntroSlideProjectComponent from '@/components/project/IntroSlideProjectComponent.vue'
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'
import IntroSearchNewsComponentVue from '@/components/news/IntroSearchNewsComponent.vue'
import ListNewsComponentVue from '@/components/news/ListNewsComponent.vue'
import PaginationComponentVue from '@/components/common/PaginationComponent.vue'
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
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
</style>
