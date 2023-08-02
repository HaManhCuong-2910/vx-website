<template>
  <div class="container-custom mx-auto">
    <div class="lg:mt-[215px] mt-[154px]">
      <IntroContactComponentVue />
    </div>
    <div class="lg:mt-[67px] mt-[61px]">
      <FormContactComponentVue />
    </div>
  </div>
  <div class="lg:mt-[107px] mt-[114px] lg:pb-[149px]">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import FormContactComponentVue from '@/components/contact/FormContactComponent.vue'
import IntroContactComponentVue from '@/components/contact/IntroContactComponent.vue'
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
</script>

<style scoped lang="scss"></style>
