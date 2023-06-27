<template>
  <div class="grid grid-cols-3 lg:grid-cols-6">
    <div
      class="item border-has"
      v-for="(item, index) in listPartner"
      :key="item.link"
      :class="[((index + 1) / (isMobile() ? 3 : 6)) % 1 === 0 ? '' : 'border-right']"
    >
      <img
        :src="item.link"
        @mouseover="onSetActive($event, true, item)"
        @mouseout="onSetActive($event, false, item)"
      />
    </div>
    <div
      class="item"
      v-for="(item, index) in listLast"
      :key="item.link"
      :class="[((index + 1) / (isMobile() ? 3 : 6)) % 1 === 0 ? '' : 'border-right']"
    >
      <img
        :src="item.link"
        @mouseover="onSetActive($event, true, item)"
        @mouseout="onSetActive($event, false, item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isMobile } from '@/constant/helper'
const listPartner = ref([
  {
    link: '/brand/itravel_1.svg',
    linkActive: '/brand/itravel_2.svg'
  },
  {
    link: '/brand/mb_1.svg',
    linkActive: '/brand/mb_2.svg'
  },
  {
    link: '/brand/tan_hoang_minh_1.svg',
    linkActive: '/brand/tan_hoang_minh_2.svg'
  },
  {
    link: '/brand/kinh_kang_1.svg',
    linkActive: '/brand/kinh_kang_2.svg'
  },
  {
    link: '/brand/katex_1.svg',
    linkActive: '/brand/katex_2.svg'
  },
  {
    link: '/brand/A_1.svg',
    linkActive: '/brand/A_2.svg'
  },
  {
    link: '/brand/zenture_1.svg',
    linkActive: '/brand/zenture_2.svg'
  },
  {
    link: '/brand/rew3_1.svg',
    linkActive: '/brand/rew3_2.svg'
  },
  {
    link: '/brand/vinaconex_1.svg',
    linkActive: '/brand/vinaconex_2.svg'
  },
  {
    link: '/brand/miotologo_1.svg',
    linkActive: '/brand/miotologo_2.svg'
  },
  {
    link: '/brand/sharp_1.svg',
    linkActive: '/brand/sharp_2.svg'
  },
  {
    link: '/brand/techcombank_1.svg',
    linkActive: '/brand/techcombank_2.svg'
  }
])
const listLast = ref([])
const onSetActive = (event, isActive: boolean, item: any) => {
  const el = event.target
  if (el) {
    if (isActive) {
      el.classList.add('active')
      el.src = item.linkActive
    } else {
      el.src = item.link
      el.classList.remove('active')
    }
  }
}

onMounted(() => {
  if (isMobile()) {
    listLast.value = listPartner.value.splice(
      listPartner.value.length - 3,
      listPartner.value.length
    )
  } else {
    listLast.value = listPartner.value.splice(
      listPartner.value.length - 6,
      listPartner.value.length
    )
  }
})
</script>

<style lang="scss" scoped>
.item {
  padding: 35px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &.border-has {
    &::after {
      position: absolute;
      content: '';
      display: block;
      bottom: 0px;
      left: 50%;
      width: 90%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateX(-50%);
    }
  }
  &.border-right {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  img {
    width: 143px;
    max-height: 96px;
    cursor: pointer;
    &.active {
      animation: fade ease-in-out 0.6s;
    }
  }
}
</style>
