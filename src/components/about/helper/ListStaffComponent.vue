<template>
  <div class="card-list-container grid lg:grid-cols-4 grid-cols-1 gap-x-4 gap-y-16">
    <div class="card-item-container" v-for="item in listCard" :key="item">
      <div v-if="!item?.isJoin">
        <div class="img-card">
          <img v-if="item.image" :src="`${BaseURLImage}${item.image}`" />
        </div>
        <h3>{{ item.fullName }}</h3>
        <p>{{ item.position }}</p>
      </div>
      <div v-else>
        <div
          class="img-card flex justify-center align-center cursor-pointer"
          @click="redirectToRecruitment()"
        >
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getListStaffApi } from '@/api/staff'
import { BaseURLImage } from '@/constant/constant'

const listCard = ref<any[]>([])
const router = useRouter()

onMounted(async () => {
  const [res, err] = await getListStaffApi()
  listCard.value = res.data
  listCard.value.push({
    isJoin: true
  })
})

const redirectToRecruitment = () => {
  router.push({
    name: 'Recruitment'
  })
}
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

@media screen and (max-width: 992px) {
  .card-item-container {
    .img-card {
      height: 437.126px;
    }

    h3 {
      font-size: 28px;
      letter-spacing: -1.12px;
      font-weight: 500;
      margin-top: 26px;
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
