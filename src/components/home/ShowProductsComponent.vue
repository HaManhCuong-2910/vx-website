<template>
  <div class="mt-62">
    <div class="flex flex-wrap">
      <div class="contain-img">
        <img src="/img/anh_home_1.png" />
        <p class="text-ps text-ps-center">Awareness is the greatest agent for change.</p>
        <div class="child-hover">
          <p class="title-hover">Zenture Retreat Resort</p>
          <p class="content-hover">HOSPITALITY</p>
        </div>
      </div>
      <div class="contain-img">
        <img src="/img/anh_home_2.png" />
        <p class="text-ps text-ps-bottom-left" :class="isMobile() && 'set-center'">
          A delivery service <br v-if="!isMobile()" />
          you cand depend on
        </p>
        <div class="child-hover">
          <p class="title-hover">Zenture Retreat Resort</p>
          <p class="content-hover">HOSPITALITY</p>
        </div>
      </div>
      <div class="contain-img">
        <img src="/img/anh_home_3.png" />
        <p class="text-ps text-ps-bottom-right" :class="isMobile() && 'set-center'">
          SPACE FOR <br />
          ART & FUTURE
        </p>
        <div class="child-hover">
          <p class="title-hover">Zenture Retreat Resort</p>
          <p class="content-hover">HOSPITALITY</p>
        </div>
      </div>
      <div class="contain-img">
        <img src="/img/anh_home_4.png" />
        <p class="text-ps text-ps-top-right">
          <span class="text-travel">Always be</span> <br />
          there for you
        </p>
        <div class="child-hover">
          <p class="title-hover">Zenture Retreat Resort</p>
          <p class="content-hover">HOSPITALITY</p>
        </div>
      </div>
      <div class="contain-img" v-if="props.isShowMore">
        <img src="/img/Rectangle_49.png" />
        <div class="child-hover">
          <p class="title-hover">Zenture Retreat Resort</p>
          <p class="content-hover">HOSPITALITY</p>
        </div>
      </div>
      <div class="contain-img" v-if="props.isShowMore">
        <img src="/img/Rectangle_48.png" />
        <div class="child-hover">
          <p class="title-hover">Zenture Retreat Resort</p>
          <p class="content-hover">HOSPITALITY</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import { ref } from 'vue'

const props = defineProps({
  isShowMore: Boolean
})
const listImage = ref([
  {
    img: '/img/anh_home_1.png'
  },
  {
    img: '/img/anh_home_2.png'
  },
  {
    img: '/img/anh_home_3.png'
  },
  {
    img: '/img/anh_home_4.png'
  }
])
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
    font-size: 60.018px;
    font-family: SangBleu Sunrise;
    line-height: 64.786px;
    width: 641px;
  }

  .text-ps-bottom-left {
    bottom: 49px;
    left: 49px;
    font-size: 45.423px;
    font-weight: 600;
    line-height: 54px;
    text-transform: uppercase;
  }

  .text-ps-bottom-right {
    bottom: 49px;
    right: 49px;
    font-size: 45.423px;
    font-weight: 600;
    line-height: 54px;
    text-transform: uppercase;
  }

  .text-ps-top-right {
    top: 49px;
    right: 49px;
    font-size: 70px;
    font-weight: 500;
    line-height: 71px;

    .text-travel {
      color: #27ccac;
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
      font-size: 36px;
      font-weight: 400;
      line-height: 43.2px;
      width: 347px;
    }

    .text-ps-bottom-left {
      font-size: 24px;
      font-weight: 600;
      line-height: 28.8px;

      width: 269px;
      height: 58px;
    }

    .text-ps-bottom-right {
      font-size: 32px;
      line-height: normal;
      width: 227px;
      height: 82px;

      text-align: center;
    }

    .text-ps-top-right {
      top: 15px;
      right: 18px;
      font-size: 35.772px;
      line-height: 36.283px;
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
    &:hover {
    }
  }
}
</style>
