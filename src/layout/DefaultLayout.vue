<template>
  <HeaderComponent />
  <slot />
  <!-- <FooterComponent /> -->
  <!-- <BackToTopButtonComponent /> -->
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import HeaderComponent from '@/components/layout/default/HeaderComponent.vue'
import FooterComponent from '@/components/layout/default/FooterComponent.vue'
import BackToTopButtonComponent from '@/components/common/BackToTopButtonComponent.vue'
</script>
