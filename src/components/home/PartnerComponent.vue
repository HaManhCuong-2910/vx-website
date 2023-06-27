<template>
  <div class="mt-153 container-custom mx-auto">
    <h3 class="font-family-helvetica mb-5">NHỮNG ĐỐI TÁC CHIẾN LƯỢC CỦA CHÚNG TÔI</h3>
    <LineAnimateComponentVue />
    <div class="mt-102">
      <ListPartnerComponentVue />
    </div>
  </div>
</template>

<script setup>
import LineAnimateComponentVue from '../util/LineAnimateComponent.vue'
import ListPartnerComponentVue from './list/ListPartnerComponent.vue'
</script>

<style lang="scss" scoped>
.mt-153 {
  margin-top: 153px;
}
.mt-102 {
  margin-top: 102px;
}
h3 {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
