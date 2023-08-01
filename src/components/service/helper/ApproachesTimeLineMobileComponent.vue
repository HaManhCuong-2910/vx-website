<template>
  <div class="container-approaches">
    <div class="relative">
      <div class="container-custom mx-auto">
        <div
          class="item-circle relative"
          v-for="(item, index) in props.dataTimeLine"
          :key="item.description.title"
        >
          <span class="item-circle-round" v-if="index > 0">
            <img src="/assets/svgs/arrow1.svg" class="arrow-center" />
          </span>
          <ContentDoubleTimeLineMobileComponent :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentDoubleTimeLineMobileComponent from './ContentDoubleTimeLineMobileComponent.vue'
import { PropType } from 'vue'

const props = defineProps({
  dataTimeLine: Array as PropType<any[]>
})
</script>

<style scoped lang="scss">
.container-approaches {
  .item-circle {
    .item-circle-round {
      position: relative;
      display: block;
      width: 57px;
      height: 63px;
      background-color: transparent;
      border-right: 1px dashed rgba(255, 255, 255, 0.24);
      img {
        position: absolute;
        width: 5.787px;
        height: 5.787px;
        transform: rotate(90deg) translateY(-50%);
        top: 50%;
        right: -1px;
      }
    }
  }
}
</style>
