<template>
  <div class="intro-home container-custom mx-auto">
    <div class="container-text flex">
      <div class="text-custom">
        <h1>châm ngôn của VX Creative Studio</h1>
        <p>Một thương hiệu có cá tính độc đáo là điều mà chúng tôi hướng đến</p>
      </div>
      <div class="icon-scroll">
        <img src="@/assets/icon/scroll_down.gif" />
      </div>
    </div>
    <HomeInFormationVue />
  </div>
</template>

<script setup>
import HomeInFormationVue from './HomeInformaitionComponent.vue'
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
</style>
