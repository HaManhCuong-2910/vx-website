<template>
  <div class="form-group" :class="classFocused">
    <label class="form-label" :for="props.label">{{ props.label }}</label>
    <input
      class="form-input"
      :class="classInput"
      v-model="dataValue"
      type="text"
      :required="props.require"
      :id="props.label"
      @focus="setFocus()"
      @blur="handleBlur()"
      @input="handleUpdateField()"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  position: relative;
  background: transparent;
  & + .form-group {
    margin-top: 30px;
    background: transparent;
  }
}

.form-label {
  position: absolute;
  left: 0;
  top: 10px;
  color: #a1a1a1;
  z-index: 10;
  background: transparent;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.05em;
}

.focused .form-label {
  transform: translateY(-125%);
  font-size: 20px;
}

.form-input {
  position: relative;
  padding: 12px 0px 5px 0;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.25);
  transition: box-shadow 150ms ease-out;
  background: transparent;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #a1a1a1;
}

@media screen and (max-width: 992px) {
  .form-label {
    font-size: 16px;
  }

  .form-group {
    & + .form-group {
      margin-top: 5px;
    }
  }

  .focused .form-label {
    font-size: 16px;
  }

  .form-input {
    font-size: 16px;
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  value: String,
  label: String,
  require: Boolean
})

const dataValue = ref('')

const emit = defineEmits(['update:value'])

onMounted(() => {
  dataValue.value = props.value
})

const handleUpdateField = () => {
  emit('update:value', dataValue.value)
}

const classFocused = ref('')
const classInput = ref('')

const setFocus = () => {
  classFocused.value = 'focused'
}

const handleBlur = () => {
  console.log('dataValue.value', dataValue.value)
  if (dataValue.value == '') {
    classFocused.value = ''
    classInput.value = ''
  } else {
    classInput.value = 'filled'
  }
}
</script>
