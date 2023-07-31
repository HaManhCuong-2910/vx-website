<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-30">
    <div class="lg:pr-[20px] lg:pt-[31px] border-right-custom">
      <LeftSideMegaMenuComponent />
    </div>
    <div class="col-span-2 lg:pl-[20px]">
      <RightSideMegaMenuComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftSideMegaMenuComponent from './LeftSideMegaMenuComponent.vue'
import RightSideMegaMenuComponent from './RightSideMegaMenuComponent.vue'
</script>

<style scoped lang="scss">
.border-right-custom {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 992px) {
  .border-right-custom {
    border-right: unset;
  }
}
</style>
