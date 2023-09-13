<template>
  <div class="flex justify-between items-center h-100 lg:pl-[20px] lg:pr-[20px]">
    <div class="flex gap-x-10">
      <p
        v-for="item in listSocial"
        :key="item.name"
        @click="openNewTabSocial(item.link)"
        class="cursor-pointer"
      >
        {{ item.name }}
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

<script setup lang="ts">
import { listSocial } from '@/constant/constant'

const openNewTabSocial = (link: string) => {
  if (!link) return
  window.open(link)
}
</script>

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
