<template>
  <div class="mega-menu">
    <div class="container-custom mx-auto">
      <div class="flex justify-between lg:mt-[23px] lg:pb-[41px]">
        <router-link
          :to="{
            name: 'home'
          }"
        >
          <img src="/icon/mega_menu_logo.svg" />
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
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
