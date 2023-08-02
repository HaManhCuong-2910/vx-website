<template>
  <div class="container-form">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-10 lg:pt-[50px] lg:pb-[50px]">
      <LeftSideFormContactComponentVue v-if="!isMobile()" />
      <div class="col-span-2">
        <FormRecruitmentComponentVue v-if="props?.typeForm === ETypeForm.RECRUITMENT" />
        <RightSideFormContactComponent v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ETypeForm } from '@/constant/constant'
import { isMobile } from '@/constant/helper'
import { PropType } from 'vue'
import FormRecruitmentComponentVue from '../recruitment/FormRecruitmentComponent.vue'
import LeftSideFormContactComponentVue from './LeftSideFormContactComponent.vue'
import RightSideFormContactComponent from './RightSideFormContactComponent.vue'

const props = defineProps({
  typeForm: Object as PropType<ETypeForm | undefined>
})
</script>

<style scoped lang="scss">
.container-form {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
@media screen and (max-width: 992px) {
  .container-form {
    padding-top: 71px;
    padding-bottom: 61px;
  }
}
</style>
