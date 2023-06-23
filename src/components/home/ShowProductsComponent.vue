<template>
  <div class="mt-62">
    <div class="flex flex-wrap">
      <div class="contain-img">
        <img src="/img/anh_home_1.png" />
        <p class="text-ps-center">Awareness is the greatest agent for change.</p>
      </div>
      <div class="contain-img">
        <img src="/img/anh_home_2.png" />
      </div>
      <div class="contain-img">
        <img src="/img/anh_home_3.png" />
      </div>
      <div class="contain-img">
        <img src="/img/anh_home_4.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const listImage = ref([
  {
    img: '/img/anh_home_1.png'
  },
  {
    img: '/img/anh_home_2.png'
  },
  {
    img: '/img/anh_home_3.png'
  },
  {
    img: '/img/anh_home_4.png'
  }
])
</script>

<style lang="scss" scoped>
.mt-62 {
  margin-top: 62px;
}
.contain-img {
  width: 50%;
  position: relative;

  img {
    width: 100%;
  }

  .text-ps-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 60.018px;
    font-family: SangBleu Sunrise;
    line-height: 64.786px;
    letter-spacing: -1.801px;
  }
}
</style>
