<template>
  <div>
    <h1 class="font-family-helvetica">
      Hãy để lại thông tin của bạn <br />
      dưới đây, chúng tôi sẽ liên <br />
      hệ trực tiếp đến bạn
    </h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h1 {
  color: #fff;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 85px; /* 118.056% */
  letter-spacing: -1.44px;
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 32px;
    line-height: 40px; /* 125% */
    letter-spacing: -1.28px;
    br {
      display: none;
    }
  }
}
</style>
