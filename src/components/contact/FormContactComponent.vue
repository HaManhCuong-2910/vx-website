<template>
  <div class="container-form">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-10 lg:pt-[50px] lg:pb-[50px]">
      <LeftSideFormContactComponentVue />
      <div class="col-span-2">
        <RightSideFormContactComponent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftSideFormContactComponentVue from './LeftSideFormContactComponent.vue'
import RightSideFormContactComponent from './RightSideFormContactComponent.vue'
</script>

<style scoped lang="scss">
.container-form {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
