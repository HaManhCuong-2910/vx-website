<template>
  <div>
    <div class="items" v-for="(item, index) in props.dataHistories" :key="index">
      <h4>{{ item.year }}</h4>
      <div class="content">
        <p class="title">{{ item.title }}</p>
        <p>
          {{ removeBrTag(item.content) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { removeBrTag } from '@/constant/constant'
import { onMounted, PropType } from 'vue'

const props = defineProps({
  dataHistories: Array as PropType<any[]>
})
</script>

<style scoped lang="scss">
h4 {
  color: #fff;
  font-family: SVN-TT Hoves;
  font-size: 150px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -4.5px;
}
.items {
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  .content {
    p {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      &.title {
        color: #fff;
        font-size: 24px;
        font-weight: 500;
        line-height: 34px; /* 141.667% */
        letter-spacing: -0.96px;
      }
    }
  }
}
</style>
