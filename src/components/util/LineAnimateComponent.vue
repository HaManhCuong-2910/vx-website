<template>
  <span class="block line-animate" :style="props.color ? `background: ${props.color}` : ''"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String
})
</script>

<style lang="scss" scoped>
.line-animate {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}
</style>
