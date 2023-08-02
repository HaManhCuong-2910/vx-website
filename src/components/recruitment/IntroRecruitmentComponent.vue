<template>
  <div class="flex lg:justify-between lg:items-end">
    <h1>
      Trở thành một phần của VX <br />
      sẽ là cơ hội phát triển không <br />
      chỉ của riêng bạn
    </h1>
    <div class="icon-scroll" v-if="!isMobile()">
      <img src="@/assets/icon/scroll_down.gif" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
</script>

<style scoped lang="scss">
h1 {
  color: #fff;
  font-family: SVN-Helvetica Now;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 85px; /* 118.056% */
  letter-spacing: -1.44px;
}
.icon-scroll {
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 32px;
    line-height: 40px; /* 125% */
    letter-spacing: -1.28px;
  }
}
</style>
