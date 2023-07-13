<template>
  <div class="container-approaches">
    <div class="relative">
      <span class="line-full"></span>
      <div class="container-custom mx-auto flex">
        <div
          class="item-circle relative"
          v-for="(item, index) in dataTimeLine"
          :class="[index > 0 && 'ml-112']"
          :key="item.description.title"
        >
          <span class="item-circle-round" v-if="index > 0">
            <img src="/assets/svgs/arrow1.svg" class="arrow-custom" />
            <img src="/assets/svgs/arrow1.svg" class="arrow-center" />
          </span>
          <ContentDoubleTimeLineComponent :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContentDoubleTimeLineComponent from './ContentDoubleTimeLineComponent.vue'
const dataTimeLine = ref([
  {
    timeItems: ['Brand Consulting', 'Brand Strategy & Content Strategy'],
    description: {
      title: 'Consultancy & Brand Strategy',
      content: 'Tư vấn chiến lược và mục tiêu thương hiệu'
    }
  },
  {
    timeItems: ['Brand Consulting', 'Brand Design Identity Systems'],
    isNextCenter: true,
    description: {
      title: 'Brand Direction & Identity Systems',
      content: 'Định hướng thương hiệu và  hệ thống nhận diện thương hiệu'
    }
  },
  {
    timeItems: ['Brand Maintant & Marketing'],
    description: {
      title: 'Maintaince & Marketing',
      content: 'Quản trị và vận hành thương hiệu'
    }
  }
])
</script>

<style scoped lang="scss">
.container-approaches {
  height: 570px;

  .line-full {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.24);
  }

  .item-circle {
    .item-circle-round {
      position: absolute;
      display: block;
      width: 359px;
      height: 359px;
      border-radius: 50%;
      top: -60px;
      left: -232px;
      border-top: 2px dashed rgba(255, 255, 255, 0.24);

      .arrow-custom {
        position: absolute;
        top: -7px;
        left: 50%;
        transform: translateX(-50%);
      }

      .arrow-center {
        position: absolute;
        top: 174px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.ml-112 {
  margin-left: 112px;
}
</style>
