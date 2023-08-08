<template>
  <div class="lg:mb-[75px]">
    <h2>{{ props.data.short_description }}</h2>
  </div>
  <div v-html="props.data.description"></div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  data: Object as PropType<any>
})
</script>

<style scoped lang="scss">
::v-deep p {
  color: rgba(0, 0, 0, 0.86);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
}
h2 {
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep img {
  width: 100%;
}
::v-deep .ql-align-center {
  text-align: center;
}
</style>
