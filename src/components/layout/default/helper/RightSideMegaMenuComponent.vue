<template>
  <div class="lg:pl-[34px]" style="max-height: 336px">
    <div class="lg:pt-[50px]">
      <ConnectUsComponent :is-hide-next-button="true" :isFull="true" />
    </div>
  </div>
  <div class="lg:mt-[58px]">
    <LineAnimateComponent />
  </div>
  <div class="lg:mr-[-90px]">
    <img src="@/assets/icon/hiring.gif" class="w-full lg:h-[337px] object-cover" />
  </div>
  <div>
    <LineAnimateComponent />
    <div class="container-social">
      <FeatureSocialComponentVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
import LineAnimateComponent from '@/components/util/LineAnimateComponent.vue'
import FeatureSocialComponentVue from './FeatureSocialComponent.vue'
</script>

<style scoped lang="scss">
.container-social {
  height: 118px;
}
</style>
