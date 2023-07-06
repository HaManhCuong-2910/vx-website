<template>
  <div>
    <h2 class="font-family-helvetica">
      Sứ mệnh của chúng tôi chính là giúp <br />
      doanh nghiệp định hình lại mục tiêu, giải <br />
      quyết những vấn đề của doanh nghiệp và <br />
      vận hành thương hiệu một cách bài bản <br />
      và có tổ chức hơn.
    </h2>
    <p class="description">
      XEM THÊM NHỮNG DỰ ÁN VỚI SỰ TÂM HUYẾT CỦA CHÚNG TÔI
      <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow-right" />
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h2 {
  color: #fff;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 85px;
  letter-spacing: -1.44px;
}
.description {
  margin-top: 32px;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  .icon-arrow-right{
    margin-left: 7px;
  }
}
</style>
