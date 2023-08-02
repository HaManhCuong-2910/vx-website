<template>
  <div class="flex items-center" style="cursor: pointer" @click="chooseFile">
    <p>{{ props?.nameFile || 'File đính kèm' }}</p>
    <div class="icon-plush-contain">
      <img src="@/assets/icon/plus-icon.svg" />
    </div>
    <input type="file" hidden ref="ElFile" @change="handleChangeFile()" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['handleChangeFile'])

const props = defineProps({
  nameFile: String
})

const ElFile = ref<any>(null)

const chooseFile = () => {
  ElFile.value.click()
}

const handleChangeFile = () => {
  emit('handleChangeFile', ElFile.value.files[0])
}
</script>

<style scoped lang="scss">
p {
  color: #fff;
  font-family: SVN-TT Hoves;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px; /* 129.167% */
  margin-right: 24px;
}

@media screen and (max-width: 992px) {
  p {
    display: none;
    font-size: 14px;
  }
  .icon-plush-contain {
    width: 21px;
    height: 21px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
