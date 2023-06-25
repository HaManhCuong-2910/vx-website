<template>
  <div>
    <div class="custom-swiper">
      <swiper
        class="custom-slide"
        :slides-per-view="'auto'"
        :modules="modules"
        :spaceBetween="30"
        :initial-slide="1"
        :navigation="(optionNavigation as undefined)"
        :grabCursor="true"
        :centeredSlides="true"
      >
        <swiper-slide class="custom-slide-item">
          <div class="item-container">
            <img src="/img/brand_slide.png" />
          </div>
        </swiper-slide>
        <swiper-slide class="custom-slide-item">
          <div>
            <img src="/img/brand_slide.png" />
          </div>

          <div class="item-container-text">
            <p class="title">TRENDING</p>
            <p class="content font-family-helvetica">
              Trí tuệ nhân tạo và con người có thể <br />
              song hành cùng nhau được hay không ?
            </p>
            <div class="breaking-news">
              <p>10.11.2022 - TRENDING</p>
              <span></span>
              <p>News</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="custom-slide-item">
          <div>
            <img src="/img/brand_slide.png" />
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
          color: #fff;
          font-size: 48px;
          font-weight: 500;
          line-height: 50px;
          letter-spacing: -0.96px;
          margin-top: 17px;
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
            background-color: #fff;
            margin-left: 7px;
          }
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

const modules = [Navigation]

const onSetActive = (event, isActive: boolean) => {
  console.log('event', event)
  const el = event.target.querySelector('img') || event.target
  if (el) {
    if (isActive) {
      el.src = '/icon/next-icon-active.png'
    } else {
      el.src = '/icon/next-icon.svg'
    }
  }
}

onMounted(() => {
  // console.log('props', props.data)
})

const optionNavigation = {
  nextEl: '#button-next-slide',
  prevEl: '#button-prev-slide'
}
</script>
