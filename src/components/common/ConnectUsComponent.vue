<template>
  <div class="flex justify-between container-custom mx-auto">
    <div>
      <p class="title font-family-helvetica">
        Kết nối với chúng tôi để cùng <br />
        đồng hành với thương hiệu và tạo <br />
        nên câu chuyện của riêng bạn
      </p>
      <p class="description">
        Liên hệ với chúng tôi để nhận tư vấn
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow-right" />
      </p>
    </div>
    <div class="contain-right-btn">
      <div
        class="right-btn"
        @mouseover="onSetActive($event, true)"
        @mouseout="onSetActive($event, false)"
      >
        <img src="/icon/next-icon.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onSetActive } from '@/constant/constant'
</script>

<style scoped lang="scss">
.title {
  color: #fff;
  font-size: 65px;
  font-style: normal;
  font-weight: 500;
  line-height: 78px;
  letter-spacing: -1.44px;
}
.description {
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 30px;

  .icon-arrow-right {
    margin-left: 7px;
  }
}
.contain-right-btn {
  align-self: flex-end;
  margin-bottom: 70px;
  .right-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #3939e5;
    cursor: pointer;
    &:hover {
      transition: 0.4s;
      background-color: #fff;
    }
  }
}
</style>
