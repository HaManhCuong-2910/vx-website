<template>
  <div class="lg:pl-[34px]" style="max-height: 336px">
    <div class="lg:pt-[50px] pt-[15px] pb-[15px]">
      <ConnectUsComponent :is-hide-next-button="true" :isFull="true" :hide-title="isMobile()" />
    </div>
  </div>
  <div class="lg:mt-[58px]">
    <LineAnimateComponent />
  </div>
  <div class="lg:mr-[-90px] lg:ml-auto mr-[-13px] ml-[-13px]">
    <img
      src="@/assets/icon/hiring.gif"
      class="w-full lg:h-[337px] object-cover"
      v-if="!isMobile()"
    />
    <img src="@/assets/icon/hiring_mobile.gif" class="w-full lg:h-[337px] object-cover" v-else />
  </div>
  <div v-if="!isMobile()">
    <LineAnimateComponent />
    <div class="container-social">
      <FeatureSocialComponentVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
import LineAnimateComponent from '@/components/util/LineAnimateComponent.vue'
import { isMobile } from '@/constant/helper'
import FeatureSocialComponentVue from './FeatureSocialComponent.vue'
</script>

<style scoped lang="scss">
.container-social {
  height: 118px;
}
</style>
