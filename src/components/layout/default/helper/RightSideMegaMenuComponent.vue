<template>
  <div class="lg:pl-[34px]">
    <div class="lg:pt-[50px]">
      <ConnectUsComponent :is-hide-next-button="true" />
    </div>
    <div class="lg:mt-[63px]">
      <LineAnimateComponent />
    </div>
    <div>
      <img src="@/assets/icon/hiring.gif" class="w-full lg:h-[337px] object-cover" />
    </div>
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
  height: 56px;
}
</style>
