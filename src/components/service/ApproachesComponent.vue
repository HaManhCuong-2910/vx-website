<template>
  <div class="container-custom mx-auto">
    <div class="title-service">
      <h2>PHƯƠNG PHÁP TIẾP CẬN</h2>
    </div>
    <div class="mt-63">
      <div class="title-procedure">
        <h2 class="font-family-helvetica">
          Quy trình thiết kế <br />
          trải nghiệm thương hiệu
        </h2>
      </div>
    </div>
  </div>
  <div class="mt-162">
    <ApproachesTimeLineComponent />
  </div>
</template>

<script setup lang="ts">
import ApproachesTimeLineComponent from './helper/ApproachesTimeLineComponent.vue'
</script>

<style scoped lang="scss">
.title-service {
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
}
.mt-63 {
  margin-top: 63px;
}
.mt-162 {
  margin-top: 162px;
}
.title-procedure {
  h2 {
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
