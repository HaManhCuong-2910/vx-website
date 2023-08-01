<template>
  <div class="relative">
    <div class="CardCircle mb-[38px]" :class="!props.data.timeItems[1] && 'bonus-after'">
      <p>{{ props.data.timeItems[0] }}</p>
    </div>
    <div class="CardCircle" v-if="props.data.timeItems[1]">
      <p>{{ props.data.timeItems[1] }}</p>
    </div>
    <span class="circle-after" v-if="props.data.timeItems[1]">
      <img src="/assets/svgs/arrow1.svg" class="arrow-next" />
      <span class="bonus-custom"></span>
    </span>
    <div class="bonus-contain" :class="!props.data.timeItems[1] && 'alone-timeLime'">
      <p class="content-title">{{ props.data.description.title }}</p>
      <p class="text-content">{{ props.data.description.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  data: Object as PropType<any>
})
</script>

<style scoped lang="scss">
.CardCircle {
  position: relative;
  z-index: 3;
  width: 115.538px;
  height: 115.538px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    max-width: 88.186px;
    color: #fff;
    text-align: center;
    font-family: SVN-TT Hoves;
    font-size: 11.318px;
    font-style: normal;
    font-weight: 500;
    line-height: 14.619px; /* 129.167% */
    letter-spacing: -0.113px;
  }

  &.bonus-after {
    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 50%;
      right: -38px;
      width: 38px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.24);
      transform: translateY(-50%);
    }
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -40px;
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}

.circle-after {
  position: absolute;
  top: 76px;
  left: 33px;
  width: 145.923px;
  height: 95.961px;
  border-top-left-radius: 110px;
  border-top-right-radius: 110px;
  border-bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0.24);
  transform: rotate(90deg);

  .arrow-next {
    position: absolute;
    left: 80px;
    top: 91.5px;
    width: 5.787px;
    height: 5.787px;
  }

  .bonus-custom {
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    left: 70px;
    top: -4px;
  }
}

.bonus-contain {
  position: absolute;
  left: 180px;
  top: 68px;
  max-width: 147px;

  &.alone-timeLime {
    top: 11px;
  }
  .content-title {
    color: #fff;
    font-family: SVN-TT Hoves;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 136.364% */
    letter-spacing: -0.88px;
  }

  .text-content {
    color: #fff;
    font-family: SVN-TT Hoves;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
}
</style>
