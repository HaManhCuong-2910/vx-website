<template>
  <div class="flex container-cardCircle">
    <div class="CardCircle mr-57" :class="!props.data.timeItems[1] && 'bonus-after'">
      <p>{{ props.data.timeItems[0] }}</p>
      <img src="/assets/svgs/arrow1.svg" class="next-center" v-if="props.data.isNextCenter" />
    </div>
    <div class="CardCircle" v-if="props.data.timeItems[1]">
      <p>{{ props.data.timeItems[1] }}</p>
    </div>
    <span class="circle-after" v-if="props.data.timeItems[1]">
      <img src="/assets/svgs/arrow1.svg" class="arrow-custom" />
      <span class="bonus-custom"></span>
    </span>
    <div class="bonus-contain" :class="!props.data.timeItems[1] && 'alone-timeLime'">
      <p class="content-title">{{ props.data.description.title }}</p>
      <p class="text-content">{{ props.data.description.content }}</p>
      <span class="line-bonus"></span>
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
.container-cardCircle {
  position: relative;
  .circle-after {
    position: absolute;
    width: 359px;
    height: 359px;
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    top: -57px;
    left: 105px;
    z-index: -1;

    .arrow-custom {
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
    }
    .bonus-custom {
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 12px;
      height: 12px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
  .CardCircle {
    z-index: 2;
    background-color: #000;
    width: 245px;
    height: 245px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    .next-center {
      position: absolute;
      top: 50%;
      right: -34px;
      transform: translateY(-50%);
    }
    &.bonus-after {
      &::after {
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
      }
    }
    p {
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 31px;
      width: 187px;
      letter-spacing: -0.24px;
    }

    &.mr-57 {
      margin-right: 57px;
    }
  }
  .bonus-contain {
    position: absolute;
    bottom: -293px;
    left: 68px;
    padding: 24px 31px;
    text-align: center;
    border-radius: 14px;
    width: 434px;
    border: 1px solid rgba(255, 255, 255, 0.24);

    &.alone-timeLime {
      left: -85px;
      bottom: calc(-293px + 26px);
      .line-bonus {
        top: -174px;
        height: 173px;
        left: 207px;
        transform: unset;
      }
    }
    .content-title {
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 31px;
      letter-spacing: -0.24px;
    }
    .text-content {
      color: rgba(255, 255, 255, 0.74);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      margin-top: 12px;
    }

    .line-bonus {
      position: absolute;
      top: -86px;
      display: block;
      width: 1px;
      height: 85px;
      left: 50%;
      background: rgba(255, 255, 255, 0.24);
      transform: translateX(-50%);
    }
  }
}
</style>
