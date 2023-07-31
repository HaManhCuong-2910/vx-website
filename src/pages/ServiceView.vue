<template>
  <div class="banner">
    <div class="mt-208 relative z-10">
      <CreativeServiceComponentVue />
    </div>
    <div class="mt-91 relative z-10">
      <ApproachesComponentVue />
    </div>
  </div>
</template>

<script setup>
import CreativeServiceComponentVue from '@/components/about/CreativeServiceComponent.vue'
import ApproachesComponentVue from '@/components/service/ApproachesComponent.vue'
</script>

<style scoped lang="scss">
.mt-208 {
  padding-top: 208px;
}
.mt-91 {
  margin-top: 91px;
}
.banner {
  background-image: url('/service/bg_service.png');
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    display: block;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, #000 100%);
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 992px) {
  .mt-208 {
    padding-top: 164px;
  }

  .banner {
    background-position: 73% 0%;
    background-size: initial;
  }

  .mt-91 {
    margin-top: 52px;
  }
}
</style>
