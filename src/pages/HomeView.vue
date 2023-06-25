<template>
  <div class="banner">
    <IntroHomeComponentVue />
  </div>
  <MissionComponentVue />
  <ShowProductsComponentVue />
  <AvisComponentVue />
</template>

<style lang="scss" scoped>
.banner {
  background-image: url('/img/background-banner.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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

<script setup lang="ts">
import AvisComponentVue from '@/components/home/AvisComponent.vue'
import IntroHomeComponentVue from '@/components/home/IntroHomeComponent.vue'
import MissionComponentVue from '@/components/home/MissionComponent.vue'
import ShowProductsComponentVue from '@/components/home/ShowProductsComponent.vue'
</script>
