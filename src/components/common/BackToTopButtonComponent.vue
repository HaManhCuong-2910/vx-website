<template>
  <a-back-top>
    <div class="custom-backTop">
      <font-awesome-icon :icon="['fas', 'arrow-up']" class="icon-arrow-up" />
    </div>
  </a-back-top>
</template>

<style lang="scss" scoped>
.custom-backTop {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  z-index: 4;
  .icon-arrow-up {
    font-size: 19px;
  }
}

@media screen and (max-width: 992px) {
  .custom-backTop {
    width: 30px;
    height: 30px;
    border-radius: 7px;
    .icon-arrow-up {
      font-size: 12px;
    }
  }
}
</style>

<script setup lang="ts"></script>
