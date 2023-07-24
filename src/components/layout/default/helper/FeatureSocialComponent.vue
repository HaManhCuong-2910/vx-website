<template>
  <div class="flex justify-between items-center h-100 lg:pl-[20px] lg:pr-[20px]">
    <div class="flex gap-x-10">
      <p>
        FACEBOOK
        <img src="@/assets/icon/arrow-cheo-white.svg" />
      </p>
      <p>
        INSTAGRAM
        <img src="@/assets/icon/arrow-cheo-white.svg" />
      </p>
      <p>
        BEHANCE
        <img src="@/assets/icon/arrow-cheo-white.svg" />
      </p>
      <p>
        VIMEO
        <img src="@/assets/icon/arrow-cheo-white.svg" />
      </p>
    </div>
    <div>
      <div class="flex gap-x-5">
        <p>Vietnamese</p>
        <p class="disable">English</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
p {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 1.44px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  &.disable {
    color: rgba(255, 255, 255, 0.4);
  }
  img {
    margin-left: 4px;
  }
}
</style>
