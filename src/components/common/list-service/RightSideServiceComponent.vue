<template>
  <div>
    <div class="title-contain">
      <h3 class="font-family-helvetica">{{ props.data.titleRightSide }}</h3>
    </div>
    <div class="list-card gap-x-5 gap-y-5">
      <span class="card-item font-family-helvetica" v-for="item in props.data.listItem" :key="item">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType } from 'vue'
const props = defineProps({
  data: Object as PropType<any>
})
</script>

<style scoped lang="scss">
.title-contain {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 66px;
  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-left: 15px;
    margin-bottom: -5px;
  }
}
.list-card {
  margin-top: 148px;
  display: flex;
  flex-wrap: wrap;
  .card-item {
    display: block;
    padding: 15px 20px;
    border-radius: 100px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}
</style>
