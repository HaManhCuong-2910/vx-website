<template>
  <div class="banner">
    <div class="mt-208">
      <CreativeServiceComponentVue />
    </div>
    <div class="mt-91">
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
  margin-top: 208px;
}
.mt-91 {
  margin-top: 91px;
}
</style>
