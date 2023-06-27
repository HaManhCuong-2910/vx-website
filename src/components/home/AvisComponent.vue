<template>
  <div class="mt-128">
    <div class="container-custom mx-auto">
      <h2 class="font-family-helvetica">
        Quan điểm của <br />
        chúng tôi về thị trường
      </h2>
      <div class="flex container-mal items-center">
        <span>Xem thêm</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow" />
      </div>
    </div>
  </div>
  <div class="mt-68">
    <SlideBrandComponent />
  </div>
</template>

<script setup>
import SlideBrandComponent from '@/components/common/SlideBrandComponent.vue'
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

.container-mal {
  margin-top: 20px;
  cursor: pointer;
  span {
    font-size: 17px;
    line-height: 22px;
  }
  .icon-arrow {
    margin-left: 7px;
    font-size: 18px;
  }
}
</style>
