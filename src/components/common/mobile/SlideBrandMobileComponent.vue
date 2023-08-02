<template>
  <div class="container-custom mx-auto" :class="props.theme ? props.theme : ''">
    <div class="slide-items" v-for="item in slideBrand" :key="item.tag">
      <p class="tag">{{ item.tag }}</p>
      <h2 class="font-family-helvetica">
        {{ item.content }}
      </h2>
      <div class="breaking-news">
        <p>{{ item.createDate }} - {{ item.tag }}</p>
        <span class="bg-primary"></span>
        <p>News</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { slideBrand } from '@/constant/constant'
const props = defineProps({
  theme: String
})
</script>

<style scoped lang="scss">
.slide-items {
  padding-top: 40px;
  padding-bottom: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
  .tag {
    color: rgba(255, 255, 255, 0.65);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px; /* 122.727% */
    letter-spacing: -0.44px;
    margin-top: 13px;
    max-width: 322px;
  }
}

.dark {
  .slide-items {
    border-top: 1px solid rgba(0, 0, 0, 0.22);
    .tag {
      color: rgba(0, 0, 0, 0.65);
    }
    h2 {
      color: #000;
    }
    .breaking-news {
      p {
        color: #000;
      }
    }
  }
}
</style>
