<template>
  <input
    class="input-common"
    :class="classInput"
    v-model="dataValue"
    :placeholder="props.placeholder"
    type="text"
    :style="props.style"
    @input="handleUpdateField()"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  value: String,
  placeholder: String,
  style: String
})

const classInput = ref('')
const dataValue = ref('')

const emit = defineEmits(['update:value'])

onMounted(() => {
  dataValue.value = props.value
})

const handleUpdateField = () => {
  emit('update:value', dataValue.value)
}
</script>

<style scoped lang="scss">
.input-common {
  position: relative;
  padding: 12px 0px 16px 0;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.25);
  transition: box-shadow 150ms ease-out;
  background: transparent;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.6);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
