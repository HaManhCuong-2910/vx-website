<template>
  <div class="container-custom mx-auto mt-215">
    <div class="grid lg:grid-cols-2 gap-x-10">
      <div>
        <h1 class="font-family-helvetica">Khám phá những dự án trải nghiệm của chúng tôi</h1>
      </div>
      <div class="lg:block flex items-end">
        <h2 class="ml-79">
          Dưới đây là những dự án sáng <br />
          tạo đầy tâm huyết của đội ngũ <br />
          VX Creative Studio đã có cơ <br />
          hội thực hiện
        </h2>
        <WatchMoreComponent v-if="isMobile()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import WatchMoreComponent from '../common/until/WatchMoreComponent.vue'
</script>

<style scoped lang="scss">
.mt-215 {
  margin-top: 215px;
}
h1 {
  color: #fff;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 85px; /* 118.056% */
  letter-spacing: -1.44px;
}
h2 {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
}
.ml-79 {
  margin-left: 79px;
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 24px;
    line-height: 30px; /* 125% */
    letter-spacing: -0.96px;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;

    br {
      display: none;
    }
  }

  .ml-79 {
    margin-left: 0px;
    margin-top: 13px;
    margin-right: 17px;
  }
}
</style>
