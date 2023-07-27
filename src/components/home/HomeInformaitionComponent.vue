<template>
  <div class="mt-159 mb-159">
    <div class="w-60 ml-auto">
      <div class="title">
        <h2>Năng lực chuyên môn của chúng tôi</h2>
      </div>
      <ProfessionalCompetenceComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfessionalCompetenceComponent from '../common/ProfessionalCompetenceComponent.vue'
</script>

<style lang="scss" scoped>
.mt-159 {
  margin-top: 159px;
}
.mb-159 {
  margin-bottom: 159px;
}
.w-60 {
  width: 60%;
}
.title {
  padding: 44px 0px;
  h2 {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -1.44px;
  }
}

@media screen and (max-width: 992px) {
  .mt-159 {
    margin-top: 65px;
  }
  .w-60 {
    width: 100%;
  }

  .title {
    padding-top: 0px;
    padding-bottom: 25px;
    h2 {
      font-size: 25px;
      line-height: 32px; /* 128% */
      letter-spacing: -0.75px;
      max-width: 290px;
    }
  }
}
</style>
