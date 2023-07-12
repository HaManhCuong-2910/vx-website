<template>
  <div class="flex container-cardCircle">
    <div class="CardCircle mr-57">
      <p>Brand Consulting</p>
    </div>
    <div class="CardCircle">
      <p>Brand Strategy & Content Strategy</p>
    </div>
    <span class="circle-after"></span>
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
}
</style>
