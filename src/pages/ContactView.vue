<template>
  <div class="container-custom mx-auto">
    <div class="lg:mt-[215px]">
      <IntroContactComponentVue />
    </div>
    <div class="lg:mt-[67px]">
      <FormContactComponentVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import FormContactComponentVue from '@/components/contact/FormContactComponent.vue'
import IntroContactComponentVue from '@/components/contact/IntroContactComponent.vue'
</script>

<style scoped lang="scss"></style>
