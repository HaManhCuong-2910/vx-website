<template>
  <div>
    <div class="lg:container lg:mt-[180px] mt-[79px]">
      <p class="tag">#INSIGHT</p>
      <h1 class="font-family-helvetica">
        {{ props.data.title }}
      </h1>
      <div class="breaking-news lg:mt-[28px]">
        <p>{{ moment(props.data.updatedAt).format('DD.MM.YYYY') }} - {{ props.data.tag }}</p>
        <span class="bg-primary"></span>
        <p>News</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { PropType } from 'vue'

const props = defineProps({
  data: Object as PropType<any>
})
</script>

<style scoped lang="scss">
.breaking-news {
  p {
    color: #000;
  }
}
.tag {
  color: #a6a6a6;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.26px;
}
h1 {
  color: #000;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 78px; /* 108.333% */
  letter-spacing: -1.44px;
  margin-top: 14px;
}

@media screen and (max-width: 992px) {
  .tag {
    font-size: 12px;
    letter-spacing: 0.84px;
  }
  h1 {
    margin-top: 10px;
    font-size: 32px;
    line-height: 40px; /* 125% */
    font-weight: 500;
    letter-spacing: -0.96px;
  }
}
</style>
