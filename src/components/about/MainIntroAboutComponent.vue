<template>
  <div class="container-custom mx-auto z-10 relative">
    <TextMainIntroComponent />
    <div class="mt-276">
      <TextHistoryComponentVue />
    </div>
    <div class="mt-62">
      <HistoryCardComponentVue />
    </div>
  </div>
</template>

<script setup>
import HistoryCardComponentVue from './helper/HistoryCardComponent.vue'
import TextHistoryComponentVue from './helper/TextHistoryComponent.vue'
import TextMainIntroComponent from './helper/TextMainIntroComponent.vue'
</script>

<style scoped lang="scss">
.mt-276 {
  margin-top: 276px;
}
.mt-62 {
  margin-top: 62px;
}
</style>
