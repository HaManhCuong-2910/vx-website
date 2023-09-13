<template>
  <div class="mt-62">
    <div class="flex flex-wrap">
      <div class="contain-img" v-for="(item, index) in listProject" :key="index">
        <img :src="`${BaseURLImage}${item.image}`" />
        <p
          class="text-ps"
          :class="isMobile() ? item.position_mobile : item.position_desktop"
          :style="`font-size: ${
            isMobile() ? item.size_mobile : item.size_desktop
          }px; font-family: ${item.font_title_large}`"
          v-html="item.title_large"
        ></p>
        <div class="child-hover">
          <p class="title-hover">{{ item.title_short }}</p>
          <p class="content-hover">{{ item.des_short }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import { onMounted, ref } from 'vue'
import { getListProjectApi } from '@/api/project'
import { BaseURLImage } from '@/constant/constant'
const listProject = ref<any[]>([])
const props = defineProps({
  isShowMore: Boolean
})

onMounted(async () => {
  const [res, err] = await getListProjectApi()
  listProject.value = res.data
})
</script>

<style lang="scss" scoped>
.mt-62 {
  margin-top: 62px;
}
.contain-img {
  width: 50%;
  height: 674px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 0.5s;
  }
  .child-hover {
    visibility: hidden;
    padding: 60px 80px;
    transition: 0.5s;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: transparent;
    .title-hover {
      font-size: 19px;
      font-weight: 500;
      line-height: 43px;
      letter-spacing: 0.95px;
      text-transform: uppercase;
      transform: translateY(-30px);
      opacity: 0;
      transition: 0.5s;
    }

    .content-hover {
      font-size: 15px;
      line-height: 26px;
      letter-spacing: 0.9px;
      text-transform: uppercase;
      opacity: 0;
      transition: 0.5s;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
      transition: 0.5s;
    }
    .child-hover {
      transition: 0.5s;
      visibility: visible;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.25);

      .title-hover {
        transition: 0.5s;
        opacity: 1;
        transform: translateY(0px);
      }

      .content-hover {
        transition: 0.5s;
        opacity: 1;
      }
    }
  }

  .text-ps {
    position: absolute;
    letter-spacing: 0.01px;
  }

  .set-center {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
  }

  .text-ps-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 64.786px;
    width: 641px;
  }

  .text-ps-bottom-left {
    bottom: 49px;
    left: 49px;
    font-weight: 600;
    width: 532px;
    line-height: 54px;
    text-transform: uppercase;
  }

  .text-ps-bottom-right {
    bottom: 49px;
    right: 49px;
    font-weight: 600;
    line-height: 54px;
    width: 346px;
    text-transform: uppercase;
  }

  .text-ps-top-right {
    top: 49px;
    right: 49px;
    font-weight: 500;
    line-height: 71px;
    width: 426px;
    span {
      font-weight: 500;
      line-height: 71px;
    }
  }
}

@media screen and (max-width: 992px) {
  .contain-img {
    width: 100%;
    height: 467px;
    img {
      object-fit: cover;
    }

    .text-ps-center {
      font-weight: 400;
      line-height: 43.2px;
      width: 347px;
    }

    .text-ps-bottom-left {
      font-weight: 600;
      line-height: 28.8px;

      width: 269px;
      height: 58px;
    }

    .text-ps-bottom-right {
      line-height: normal;
      width: 227px;
      height: 82px;
      text-align: center;
    }

    .text-ps-top-right {
      top: 15px;
      right: 18px;
      line-height: 36.283px;
      width: 221.034px;
    }
    .child-hover {
      padding: 40px 35px;

      .title-hover {
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.8px;
      }

      .content-hover {
        font-size: 10px;
        margin-top: 7px;
        line-height: normal;
        letter-spacing: 0.7px;
      }
    }
  }
}
</style>
