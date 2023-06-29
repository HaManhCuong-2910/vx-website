<template>
  <div>
    <div class="title-contain">
      <img src="/img/VX_service.png" />
      <h3 class="font-family-helvetica">SERVICES</h3>
    </div>
    <div class="content">
      <h4 class="font-family-helvetica">{{ props.data.title }}</h4>
      <p>
        {{ props.data.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType } from 'vue'
const props = defineProps({
  data: Object as PropType<any>
})
onMounted(() => {
  console.log(props.data)
})
</script>

<style scoped lang="scss">
.title-contain {
  display: flex;
  align-items: flex-end;
  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-left: 15px;
    margin-bottom: -5px;
  }
}
.content {
  margin-top: 88px;
  h4 {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    line-height: 55px;
    letter-spacing: -1px;
  }
  p {
    margin-top: 31px;
    color: rgba(255, 255, 255, 0.86);
    font-size: 18px;
    line-height: 27px;
  }
}
</style>
