<template>
  <div class="container-all" v-for="(item, index) in props.data" :key="index">
    <div class="container-title">
      <img src="/img/VX_service.png" />
      <div class="container-title-text">
        <h3 class="font-family-helvetica">SERVICES</h3>
        <h3>{{ item.titleRightSide }}</h3>
      </div>
    </div>
    <div class="container-content">
      <h4>{{ item.title }}</h4>
      <p>
        {{ item.content }}
      </p>
    </div>

    <div class="container-card gap-x-1 gap-y-5">
      <span
        class="card-item font-family-helvetica"
        v-for="(itemChild, index) in item.listItem"
        :key="index"
        >{{ itemChild }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType } from 'vue'

const props = defineProps({
  data: Array as PropType<any[]>
})

onMounted(() => {
  console.log('props', props.data)
})
</script>

<style scoped lang="scss">
.container-all {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  padding-bottom: 67px;

  .container-title {
    display: flex;
    img {
      width: 83px;
      height: 40.382px;
    }

    .container-title-text {
      margin-left: 15px;
      h3 {
        color: #fff;
        font-family: SVN-Helvetica Now;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.7px;
      }
    }
  }

  .container-content {
    margin-top: 50px;
    h4 {
      color: #fff;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 35px;
      letter-spacing: -0.52px;
    }

    p {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-top: 22px;
    }
  }

  .container-card {
    margin-top: 46px;
    display: flex;
    flex-wrap: wrap;
    span {
      display: block;
      padding: 10px 15px;
      border-radius: 100px;
      border: 1px solid #fff;
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
}
</style>
