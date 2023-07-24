<template>
  <div class="mega-menu">
    <div class="container-custom mx-auto">
      <div class="flex justify-between lg:mt-[23px] lg:pb-[41px]">
        <router-link
          :to="{
            name: 'home'
          }"
        >
          <svg
            width="136"
            height="66"
            viewBox="0 0 136 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_570_1156)">
              <path
                d="M35.85 62.41L3.75 0H0L33.68 65.74H37.9L71.5 0H68.03L35.85 62.41Z"
                fill="white"
              />
              <path
                d="M107.56 33.89L135.12 0H131.04L104.32 32.76L74.7701 0H70.4102L100.97 33.89H98.8801L71.3202 65.73H75.4002L102.02 35.06L129.69 65.74H134.05L105.33 33.89H107.56Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_570_1156">
                <rect width="135.12" height="65.74" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </router-link>

        <img
          src="@/assets/icon/close-mega-menu.svg"
          class="cursor-pointer"
          @click="onCloseMegaMenu()"
        />
      </div>
      <LineAnimateComponent />
      <div>
        <ContentMegaMenuComponent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineAnimateComponent from '@/components/util/LineAnimateComponent.vue'
import ContentMegaMenuComponent from './ContentMegaMenuComponent.vue'

const emit = defineEmits(['closeMegaMenu'])

const onCloseMegaMenu = () => {
  emit('closeMegaMenu')
}
</script>

<style scoped lang="scss">
.mega-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: #000;
}
</style>
