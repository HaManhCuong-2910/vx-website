<template>
  <div class="container-custom mx-auto mt-215" :class="props.theme ? props.theme : ''">
    <div class="grid lg:grid-cols-2 gap-x-10">
      <div class="lg:block flex items-end justify-between">
        <h1 class="font-family-helvetica">
          Những bài viết <br />
          nổi bật
        </h1>
        <WatchMoreComponentVue :theme="props.theme || ''" />
      </div>
      <div v-if="!isMobile()">
        <h2 class="ml-79">
          Dưới đây là những dự án sáng <br />
          tạo đầy tâm huyết của đội ngũ <br />
          VX Creative Studio đã có cơ <br />
          hội thực hiện
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import WatchMoreComponentVue from '../common/until/WatchMoreComponent.vue'

const props = defineProps({
  theme: String
})
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

.dark {
  h1 {
    color: #000;
  }
  h2 {
    color: #000;
  }
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 24px;
    line-height: 30px; /* 125% */
    letter-spacing: -0.96px;
    margin-right: 17px;
    br {
      display: none;
    }
  }

  .mt-215 {
    margin-top: 123px;
  }
}
</style>
