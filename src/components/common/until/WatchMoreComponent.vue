<template>
  <div class="flex container-mal items-center" :class="props.theme ? props.theme : ''">
    <span>Xem thêm</span>
    <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  theme: String
})
</script>

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

.dark {
  color: #000;
}

@media screen and (max-width: 992px) {
  .container-mal {
    span {
      width: 69px;
      font-size: 15px;
      font-weight: 400;
      line-height: 21px;
    }

    .icon-arrow {
      width: 16px;
      height: 12px;
    }
  }
}
</style>
