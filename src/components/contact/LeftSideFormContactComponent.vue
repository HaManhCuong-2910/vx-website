<template>
  <div
    class="left-from-contact"
    :class="[props.isUnsetBorderRight && 'unset-border-right', props.class]"
  >
    <h2>Trụ sở văn phòng</h2>
    <div class="group-contact lg:mt-[107px]">
      <h3>Địa chỉ:</h3>
      <p>
        Tầng 11 phòng 18 tòa D’el Dorado Tân Hoàng Minh 659a Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội
      </p>
    </div>
    <div class="group-contact">
      <h3>Hotline:</h3>
      <p>(+84) 971 461 736</p>
    </div>
    <div class="group-contact">
      <h3>E-mail:</h3>
      <p>creativestudio.vn@gmail.com</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isUnsetBorderRight: Boolean,
  class: String
})
</script>

<style scoped lang="scss">
.left-from-contact {
  padding: 35px 59px 50px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &.custom-mega-menu {
    h2 {
      font-size: 34px;
      padding-bottom: 15px;
    }

    .group-contact {
      margin-top: 20px;

      p {
        font-size: 20px;
      }
    }
  }

  &.unset-border-right {
    border-right: unset;
  }

  h2 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px;
  }

  .group-contact {
    margin-top: 25px;
    h3 {
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 31px;
    }
    p {
      margin-top: 15px;
      color: rgba(255, 255, 255, 0.81);
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 31px;
    }
  }
}
</style>
