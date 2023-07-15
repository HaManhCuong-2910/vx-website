<template>
  <div class="mt-128">
    <div class="container-custom mx-auto">
      <h2 class="font-family-helvetica">
        Quan điểm của <br />
        chúng tôi về thị trường
      </h2>
      <WatchMoreComponentVue />
    </div>
  </div>
  <div class="mt-68">
    <SlideBrandComponent />
  </div>
</template>

<script setup>
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'
import WatchMoreComponentVue from '../common/until/WatchMoreComponent.vue'
</script>

<style lang="scss" scoped>
.mt-128 {
  margin-top: 128px;
}
.mt-68 {
  margin-top: 68px;
}
h2 {
  color: #fff;
  font-size: 65px;
  font-weight: 500;
  line-height: 85px;
  letter-spacing: -2.44px;
  margin-top: 30px;
}
</style>
