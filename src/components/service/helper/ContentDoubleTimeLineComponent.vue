<template>
  <div class="flex container-cardCircle">
    <div class="CardCircle mr-57">
      <p>Brand Consulting</p>
    </div>
    <div class="CardCircle">
      <p>Brand Strategy & Content Strategy</p>
    </div>
    <span class="circle-after">
      <img src="/assets/svgs/arrow1.svg" class="arrow-custom" />
      <span class="bonus-custom"></span>
    </span>
    <div class="bonus-contain">
      <p class="content-title">Consultancy & Brand Strategy</p>
      <p class="text-content">Tư vấn chiến lược và mục tiêu thương hiệu</p>
      <span class="line-bonus"></span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-cardCircle {
  position: relative;
  .circle-after {
    position: absolute;
    width: 359px;
    height: 359px;
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    top: -57px;
    left: 105px;
    z-index: -1;

    .arrow-custom {
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
    }
    .bonus-custom {
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 12px;
      height: 12px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
  .CardCircle {
    z-index: 2;
    background-color: #000;
    width: 245px;
    height: 245px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 31px;
      letter-spacing: -0.24px;
    }

    &.mr-57 {
      margin-right: 57px;
    }
  }
  .bonus-contain {
    position: absolute;
    bottom: -249px;
    left: 66px;
    padding: 24px 31px;
    text-align: center;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.24);

    .content-title {
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 31px;
      letter-spacing: -0.24px;
    }
    .text-content {
      color: rgba(255, 255, 255, 0.74);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }

    .line-bonus {
      position: absolute;
      top: -86px;
      display: block;
      width: 1px;
      height: 85px;
      left: 50%;
      background: rgba(255, 255, 255, 0.24);
      transform: translateX(-50%);
    }
  }
}
</style>
