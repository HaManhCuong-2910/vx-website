<template>
  <div class="banner">
    <IntroHomeComponentVue />
  </div>
  <MissionComponentVue />
  <ShowProductsComponentVue />
  <AvisComponentVue />
  <PartnerComponentVue />
  <div class="mt-250 bg-service">
    <ListServiceComponentVue />
    <div class="mt-250 pb-100 relative z-10">
      <ConnectUsComponent />
    </div>
  </div>
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
.mt-250 {
  margin-top: 250px;
}
.bg-service {
  background-image: url('/img/brand_background.png');
  background-repeat: no-repeat;
  background-position: 15% 100%;
  background-size: cover;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    display: block;
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.2) 100%);
    width: 100%;
    height: 100%;
  }
}
</style>

<script setup>
import ListServiceComponentVue from '@/components/common/ListServiceComponent.vue'
import AvisComponentVue from '@/components/home/AvisComponent.vue'
import IntroHomeComponentVue from '@/components/home/IntroHomeComponent.vue'
import MissionComponentVue from '@/components/home/MissionComponent.vue'
import PartnerComponentVue from '@/components/home/PartnerComponent.vue'
import ShowProductsComponentVue from '@/components/home/ShowProductsComponent.vue'
import ConnectUsComponent from '@/components/common/ConnectUsComponent.vue'
</script>
