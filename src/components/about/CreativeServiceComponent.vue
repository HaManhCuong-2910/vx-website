<template>
  <div class="container-custom mx-auto flex lg:flex-row flex-col">
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

@media screen and (max-width: 992px) {
  .title-container {
    border-top: unset;
    margin-bottom: 25px;

    h2 {
      max-width: 241px;
      font-size: 25px;
      line-height: 32px;
      font-weight: 500;
      letter-spacing: -0.75px;
      br {
        display: none;
      }
    }
  }

  .container-professional {
    margin-left: 0px;
    width: 100%;
  }
}
</style>
