<template>
  <div class="intro-home container-custom mx-auto">
    <div class="container-text flex">
      <div class="text-custom">
        <h1 ref="title">châm ngôn của VX Creative Studio</h1>
        <p ref="content" class="font-family-helvetica">
          Một thương hiệu có cá tính độc đáo là điều mà chúng tôi hướng đến
        </p>
      </div>
      <div class="icon-scroll" v-if="!isMobile()">
        <img src="@/assets/icon/scroll_down.gif" />
      </div>
    </div>
    <HomeInFormationVue />
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import HomeInFormationVue from './HomeInformaitionComponent.vue'
import ScrollReveal from 'scrollreveal'
import { ref, watch } from 'vue'
const title = ref(null)
const content = ref(null)
watch(
  () => [title.value, content.value],
  () => {
    if (title.value && content.value) {
      ScrollReveal().reveal(title.value, {
        duration: 800,
        distance: '80px',
        opacity: 0,
        origin: 'bottom',
        easing: 'ease'
      })
      ScrollReveal().reveal(content.value, {
        duration: 800,
        distance: '80px',
        opacity: 0,
        origin: 'bottom',
        easing: 'ease'
      })
    }
  }
)
</script>

<style lang="scss" scoped>
.intro-home {
  position: relative;
  color: #fff;
  z-index: 10;
  padding-top: 479px;
  .container-text {
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 161px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
    .text-custom {
      max-width: 983px;

      h1 {
        color: rgba(255, 255, 255, 0.65);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.9px;
        text-transform: uppercase;
        margin-bottom: 28px;
      }

      p {
        color: #fff;
        text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-size: 95px;
        font-weight: 500;
        line-height: 102px;
        letter-spacing: -3.8px;
      }
    }

    .icon-scroll {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .intro-home {
    padding-top: 260px;

    .container-text {
      padding-bottom: 50px;
      .text-custom {
        h1 {
          font-size: 11px;
          margin-bottom: 20px;
        }

        p {
          font-size: 31px;
          line-height: 38px;
          letter-spacing: -0.62px;
        }
      }
    }
  }
}
</style>
