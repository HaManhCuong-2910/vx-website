<template>
  <div class="container-custom mx-auto">
    <div v-if="!isMobile()">
      <div
        class="grid grid-cols-2 gap-x-60 container-card-full pt-8"
        v-for="item in listCard"
        :key="item"
      >
        <div>
          <LeftSideServiceComponentVue :data="item" />
        </div>
        <div>
          <RightSideServiceComponent :data="item" />
        </div>
      </div>
    </div>
    <div v-else>
      <ListSideServiceMobileComponentVue :data="listCard" />
    </div>
  </div>
</template>

<script setup>
import LeftSideServiceComponentVue from './list-service/LeftSideServiceComponent.vue'
import RightSideServiceComponent from '@/components/common/list-service/RightSideServiceComponent.vue'
import { ref } from 'vue'
import * as dataServices from '@/service/data/services.json'
import { isMobile } from '@/constant/helper'
import ListSideServiceMobileComponentVue from './mobile/ListSideServiceMobileComponent.vue'

const listCard = ref(dataServices.default)
</script>

<style scoped lang="scss">
.container-card-full {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 100px;

  &:last-child {
    border-bottom: unset;
  }
}
.container-custom {
  position: relative;
}

@media screen and (max-width: 992px) {
}
</style>
