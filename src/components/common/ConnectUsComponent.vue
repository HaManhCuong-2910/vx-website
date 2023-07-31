<template>
  <div class="flex justify-between flex-mb" :class="!isFull && 'container-custom mx-auto'">
    <div>
      <p class="title font-family-helvetica" v-if="!props.hideTitle">
        Kết nối với chúng tôi để cùng <br />
        đồng hành với thương hiệu và tạo <br />
        nên câu chuyện của riêng bạn
      </p>
      <p class="description" :class="props.hideTitle && '!mt-0'">
        Liên hệ với chúng tôi để nhận tư vấn
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow-right" />
      </p>
    </div>
    <div class="contain-right-btn" v-if="!props.isHideNextButton">
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
const props = defineProps({
  isHideNextButton: Boolean,
  hideTitle: Boolean,
  isFull: Boolean
})
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

@media screen and (max-width: 992px) {
  .title {
    font-size: 24px;
    line-height: 34px; /* 141.667% */
    letter-spacing: -0.48px;
  }
  .flex-mb {
    flex-direction: column;

    .description {
      font-size: 15px;
      line-height: 21px;
      margin-top: 23px;
    }

    .contain-right-btn {
      align-self: flex-start;
      margin-top: 37px;

      .right-btn {
        width: 85px;
        height: 85px;
      }
    }
  }
}
</style>
