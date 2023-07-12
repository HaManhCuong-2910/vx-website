<template>
  <div class="card-list-container grid lg:grid-cols-4 gap-x-4 gap-y-16">
    <div class="card-item-container" v-for="item in listCard" :key="item">
      <div v-if="!item?.isJoin">
        <div class="img-card">
          <img v-if="item.img" :src="item.img" />
        </div>
        <h3>{{ item.name }}</h3>
        <p>{{ item.position }}</p>
      </div>
      <div v-else>
        <div class="img-card flex justify-center align-center">
          <div class="flex items-center join-txt">
            <p>JOIN US</p>
            <img src="@/assets/icon/arrow_cheo.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStaff } from '@/constant/constant'
import { onMounted, ref } from 'vue'

const listCard = ref<any[]>([])

onMounted(() => {
  listCard.value = JSON.parse(JSON.stringify(dataStaff))
  listCard.value.push({
    isJoin: true
  })
})
</script>

<style scoped lang="scss">
.card-item-container {
  .img-card {
    width: 100%;
    height: 499px;
    background-color: #fff;

    .join-txt {
      p {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 31px;
        letter-spacing: 1.44px;
        margin-top: 0px;
      }
      img {
        margin-left: 4px;
      }
    }
  }
  h3 {
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.36px;
    margin-top: 30px;
  }

  p {
    color: rgba(255, 255, 255, 0.77);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin-top: 7px;
    line-height: normal;
  }
}
</style>
