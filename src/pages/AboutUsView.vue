<template>
  <div class="banner">
    <IntroAboutComponent />
    <LineAnimateComponentVue />
  </div>
</template>

<script setup>
import IntroAboutComponent from '@/components/about/IntroAboutComponent.vue'
import LineAnimateComponentVue from '@/components/util/LineAnimateComponent.vue'
</script>

<style scoped lang="scss">
.banner {
  background-image: url('/about/bg_about.png');
  background-repeat: no-repeat;
  background-position: 15% 0%;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    display: block;
    background: linear-gradient(215deg, rgba(0, 0, 0, 0.55) 0.51%, #000000 89.91%);
    width: 100%;
    height: 100%;
  }
}
</style>
