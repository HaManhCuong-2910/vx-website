<template>
  <div>
    <div class="custom-swiper">
      <swiper
        class="custom-slide"
        :slides-per-view="'auto'"
        :modules="modules"
        :spaceBetween="30"
        :initial-slide="1"
        :loop="true"
        :navigation="(optionNavigation as undefined)"
        :grabCursor="true"
        :centeredSlides="true"
      >
        <swiper-slide class="custom-slide-item" v-for="(item, index) in slideBrand" :key="index">
          <div>
            <img :src="item.img" />
          </div>

          <div class="item-container-text">
            <p class="title">{{ item.tag }}</p>
            <p class="content font-family-helvetica">
              {{ item.content }}
            </p>
            <div class="breaking-news">
              <p>{{ item.createDate }} - {{ item.tag }}</p>
              <span class="bg-white"></span>
              <p>News</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div
        id="button-next-slide"
        class="contain-icon-nav"
        @mouseover="onSetActive($event, true)"
        @mouseout="onSetActive($event, false)"
      >
        <img src="/icon/next-icon.svg" />
      </div>
      <div
        id="button-prev-slide"
        class="contain-icon-nav"
        @mouseover="onSetActive($event, true)"
        @mouseout="onSetActive($event, false)"
      >
        <img src="/icon/next-icon.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-swiper {
  position: relative;

  .contain-icon-nav {
    position: absolute;
    top: 50%;
    width: 75px;
    height: 75px;
    transform: translateY(-50%);
    right: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #000;
    border-radius: 50%;
    z-index: 1;

    &:hover {
      transition: 0.4s;
      background-color: #fff;
    }

    &#button-prev-slide {
      left: 60px;
      transform: rotate(180deg);
    }
  }

  .custom-slide {
    .custom-slide-item {
      position: relative;
      width: 70%;
      overflow: hidden;
      &:hover {
        img {
          transition: 0.5s;
          transform: scale(1.1);
        }
      }

      img {
        width: 100%;
        height: 750px;
      }

      .item-container-text {
        position: absolute;
        bottom: 20px;
        left: 40px;

        .title {
          color: #a6a6a6;
          font-size: 18px;
          letter-spacing: 1.26px;
        }
        .content {
          max-width: 880px;
          color: #fff;
          font-size: 48px;
          font-weight: 500;
          line-height: 50px;
          letter-spacing: -0.96px;
          margin-top: 17px;
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/navigation'
import { onMounted, PropType } from 'vue'
import { onSetActive, slideBrand } from '@/constant/constant'

const modules = [Navigation]

onMounted(() => {
  // console.log('props', props.data)
})

const optionNavigation = {
  nextEl: '#button-next-slide',
  prevEl: '#button-prev-slide'
}
</script>
