<template>
  <div>
    <div class="container-custom mx-auto lg:mt-[215px]">
      <IntroRecruitmentComponentVue />
    </div>
    <div class="lg:mt-[94px]">
      <img src="@/assets/icon/hiring.gif" class="w-full" />
    </div>
    <div class="container-custom mx-auto">
      <FormContactComponentVue :typeForm="ETypeForm.RECRUITMENT" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroRecruitmentComponentVue from '@/components/recruitment/IntroRecruitmentComponent.vue'
import FormContactComponentVue from '@/components/contact/FormContactComponent.vue'
import { ETypeForm } from '@/constant/constant'
</script>

<style scoped lang="scss"></style>
