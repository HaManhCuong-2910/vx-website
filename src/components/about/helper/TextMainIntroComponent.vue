<template>
  <div>
    <h2 class="font-family-helvetica">
      Sứ mệnh của chúng tôi chính là giúp <br v-if="!isMobile()" />
      doanh nghiệp định hình lại mục tiêu, giải <br v-if="!isMobile()" />
      quyết những vấn đề của doanh nghiệp và <br v-if="!isMobile()" />
      vận hành thương hiệu một cách bài bản <br v-if="!isMobile()" />
      và có tổ chức hơn.
    </h2>
    <p class="description">
      XEM THÊM NHỮNG DỰ ÁN VỚI SỰ TÂM HUYẾT CỦA CHÚNG TÔI
      <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow-right" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
</script>

<style scoped lang="scss">
h2 {
  color: #fff;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 85px;
  letter-spacing: -1.44px;
}
.description {
  margin-top: 32px;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  .icon-arrow-right {
    margin-left: 7px;
  }
}

@media screen and (max-width: 992px) {
  h2 {
    font-size: 22px;
    line-height: 27px;
  }

  .description {
    max-width: 240px;
    font-size: 15px;
    line-height: 21px;
  }
}
</style>
