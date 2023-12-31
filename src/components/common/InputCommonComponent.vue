<template>
  <div class="relative">
    <input
      class="input-common"
      :class="[classInput, props.error && 'errors-input']"
      v-model="dataValue"
      :placeholder="props.placeholder"
      type="text"
      :style="props.style"
      :readonly="props.readonly"
      :disabled="props.disabled"
      @input="handleUpdateField()"
      @blur="handleBlurField()"
    />
    <div class="prefix-input">
      <slot name="prefix" />
    </div>
  </div>
  <p class="errors-custom" v-if="props.error">{{ props.error }}</p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  value: String,
  placeholder: String,
  style: String,
  disabled: Boolean,
  readonly: Boolean,
  error: String
})

const classInput = ref('')
const dataValue = ref('')

const emit = defineEmits(['update:value', 'blurField', 'inputField'])

onMounted(() => {
  dataValue.value = props.value
})

const handleUpdateField = () => {
  emit('update:value', dataValue.value)
  emit('inputField', dataValue.value)
}
const handleBlurField = () => {
  emit('blurField', dataValue.value)
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

  &.errors-input {
    box-shadow: 0 1px 0 0 #e84118;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
}

.errors-custom {
  font-size: 24px;
  color: #e84118;
}

.prefix-input {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 992px) {
  .input-common,
  .errors-custom {
    font-size: 20px;
  }
}
</style>
