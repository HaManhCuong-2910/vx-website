<template>
  <div>
    <IntroProjectComponentVue />
    <div class="mt-104">
      <ShowProductsComponent :is-show-more="true" />
    </div>
    <div class="mt-222">
      <IntroSlideProjectComponent />
    </div>
    <div class="mt-68">
      <SlideBrandComponent />
    </div>
    <div class="mt-290 pb-24">
      <ConnectUsComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroProjectComponentVue from '@/components/project/IntroProjectComponent.vue'
import ShowProductsComponent from '@/components/home/ShowProductsComponent.vue'
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'
import IntroSlideProjectComponent from '@/components/project/IntroSlideProjectComponent.vue'
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
</script>

<style scoped lang="scss">
.mt-104 {
  margin-top: 104px;
}
.mt-68 {
  margin-top: 68px;
}
.mt-222 {
  margin-top: 222px;
}
.mt-290 {
  margin-top: 290px;
}
.pb-24 {
  padding-bottom: 24px;
}
</style>
