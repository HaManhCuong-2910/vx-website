<template>
  <div class="flex container-mal items-center">
    <span>Xem thêm</span>
    <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-mal {
  margin-top: 20px;
  cursor: pointer;
  span {
    font-size: 17px;
    line-height: 22px;
  }
  .icon-arrow {
    margin-left: 7px;
    font-size: 18px;
  }
}
</style>
