<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-y-36 gap-y-16">
    <div
      class="container-card"
      @click="redirectToDetail(item._id)"
      v-for="(item, index) in props.data"
      :key="index"
    >
      <div class="contain-img">
        <img :src="`${BaseURLImage}${item.imgs}`" />
      </div>

      <div class="card-content">
        <p class="title">{{ item.tag }}</p>
        <p class="content font-family-helvetica">
          {{ item.title }}
        </p>
        <div class="breaking-news">
          <p>{{ moment(item.updatedAt).format('DD.MM.YYYY') }} - {{ item.tag }}</p>
          <span class="bg-primary"></span>
          <p>News</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PropType } from 'vue'
import { BaseURLImage } from '@/constant/constant'
import moment from 'moment'

const props = defineProps({
  data: Array as PropType<any[]>
})
const router = useRouter()

const redirectToDetail = (id: string) => {
  router.push({
    name: 'DetailNews',
    params: {
      id
    }
  })
}
</script>

<style scoped lang="scss">
.container-card {
  cursor: pointer;
  .contain-img {
    width: 100%;
    overflow: hidden;
    height: 602px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s;
    }

    &:hover {
      img {
        transition: 0.5s;
        transform: scale(1.1);
      }
    }
  }

  .card-content {
    margin-top: 25px;

    .title {
      color: #a6a6a6;
      font-size: 18px;
      letter-spacing: 1.26px;
    }

    .content {
      color: #fff;
      font-family: SVN-Helvetica Now;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 43px; /* 119.444% */
      letter-spacing: -0.36px;
    }

    .breaking-news {
      margin-top: 20px;
      display: flex;
      align-items: center;
      p {
        color: #fff;
        font-size: 18px;
        letter-spacing: 1.26px;

        &:last-child {
          margin-left: 7px;
        }
      }

      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #3939e5;
        margin-left: 7px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .container-card {
    .contain-img {
      height: 256px;
    }

    .card-content {
      .title {
        font-size: 12px;
        letter-spacing: 0.84px;
      }
      .content {
        margin-top: 10px;
        font-size: 22px;
        line-height: 27px; /* 122.727% */
        letter-spacing: -0.44px;
      }

      .breaking-news {
        margin-top: 15px;

        p {
          font-size: 15px;
          line-height: 21px; /* 140% */
        }
      }
    }
  }
}
</style>
