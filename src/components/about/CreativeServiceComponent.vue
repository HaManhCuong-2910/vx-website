<template>
  <div class="container-custom mx-auto flex">
    <div class="title-container">
      <h2>
        Dịch vụ sáng tạo <br />
        tại VX Creative Studio
      </h2>
    </div>
    <div class="container-professional">
      <ProfessionalCompetenceComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfessionalCompetenceComponent from '../common/ProfessionalCompetenceComponent.vue'
</script>

<style lang="scss" scoped>
.title-container {
  width: 540px;
  padding-top: 19px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  h2 {
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.36px;
  }
}

.container-professional {
  margin-left: 20px;
  width: calc(100% - 540px);
}
</style>
