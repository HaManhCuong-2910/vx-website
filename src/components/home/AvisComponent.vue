<template>
  <div class="mt-128">
    <div class="container-custom mx-auto container-avis">
      <h2 class="font-family-helvetica">
        Quan điểm của <br />
        chúng tôi về thị trường
      </h2>
      <WatchMoreComponentVue />
    </div>
  </div>
  <div class="mt-68">
    <SlideBrandComponent v-if="!isMobile()" />
    <SlideBrandMobileComponentVue v-else />
  </div>
</template>

<script setup>
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'
import WatchMoreComponentVue from '../common/until/WatchMoreComponent.vue'
import { isMobile } from '@/constant/helper'
import SlideBrandMobileComponentVue from '../common/mobile/SlideBrandMobileComponent.vue'
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

@media screen and (max-width: 992px) {
  .mt-128 {
    margin-top: 98px;
  }
  .container-avis {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h2 {
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 27px; /* 122.727% */
      letter-spacing: -0.44px;
      margin-top: 0px;
    }
  }
}
</style>
