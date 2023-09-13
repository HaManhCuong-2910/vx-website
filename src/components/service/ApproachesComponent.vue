<template>
  <div class="container-custom mx-auto">
    <div class="title-service">
      <h2>PHƯƠNG PHÁP TIẾP CẬN</h2>
    </div>
    <div class="mt-63">
      <div class="title-procedure">
        <h2 class="font-family-helvetica">
          Quy trình thiết kế <br />
          trải nghiệm thương hiệu
        </h2>
      </div>
    </div>
  </div>
  <div class="mt-162">
    <ApproachesTimeLineComponent :data-time-line="dataTimeLine" v-if="!isMobile()" />
    <ApproachesTimeLineMobileComponent :data-time-line="dataTimeLine" v-else />
  </div>
  <div class="mt-128">
    <div class="container-custom mx-auto">
      <LineAnimateComponent />
      <div class="mt-63">
        <div class="title-procedure">
          <h2 class="font-family-helvetica">
            Quy trình thiết kế <br />
            trải nghiệm người dùng
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-162">
    <ApproachesTimeLineComponent :data-time-line="dataTimeLineDesign" v-if="!isMobile()" />
    <ApproachesTimeLineMobileComponent :data-time-line="dataTimeLineDesign" v-else />
  </div>
  <!-- <div class="mt-309">
    <ListServiceComponent />
  </div> -->
  <div class="mt-162" :class="!isMobile() && 'pb-100'">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import ApproachesTimeLineComponent from './helper/ApproachesTimeLineComponent.vue'
import LineAnimateComponent from '../util/LineAnimateComponent.vue'
import ListServiceComponent from '../common/ListServiceComponent.vue'
import ConnectUsComponent from '../common/ConnectUsComponent.vue'
import ApproachesTimeLineMobileComponent from './helper/ApproachesTimeLineMobileComponent.vue'

import { ref } from 'vue'
import { isMobile } from '@/constant/helper'

const dataTimeLine = ref([
  {
    timeItems: ['Brand Consulting', 'Brand Strategy & Content Strategy'],
    description: {
      title: 'Consultancy & Brand Strategy',
      content: 'Tư vấn chiến lược và mục tiêu thương hiệu'
    }
  },
  {
    timeItems: ['Brand Consulting', 'Brand Design Identity Systems'],
    isNextCenter: true,
    description: {
      title: 'Brand Direction & Identity Systems',
      content: 'Định hướng thương hiệu và  hệ thống nhận diện thương hiệu'
    }
  },
  {
    timeItems: ['Brand Maintant & Marketing'],
    description: {
      title: 'Maintaince & Marketing',
      content: 'Quản trị và vận hành thương hiệu'
    }
  }
])

const dataTimeLineDesign = ref([
  {
    timeItems: ['UX Strategy', 'UX Research & Art Direction'],
    description: {
      title: 'UX Research & UX Strategy',
      content: 'Nghiên cứu người dùng và chiến lược trải nghiệm người dùng'
    }
  },
  {
    timeItems: ['UX/UI Concept', 'UI Design'],
    isNextCenter: true,
    description: {
      title: 'Design Concept & Functional',
      content: 'Thiết kế luồng trải nghiệm, chiến lược và thiết kế giao diện người dùng'
    }
  },
  {
    timeItems: ['Developement'],
    description: {
      title: 'Maintaince Website/Apps',
      content: 'Quản trị, vận hành và phát triển hệ thống website/apps'
    }
  }
])
</script>

<style scoped lang="scss">
.title-service {
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
}
.mt-63 {
  margin-top: 63px;
}
.mt-128 {
  margin-top: 128px;
}
.mt-162 {
  margin-top: 162px;
}
.mt-309 {
  margin-top: 309px;
}
.title-procedure {
  h2 {
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

@media screen and (max-width: 992px) {
  .title-service {
    padding-bottom: 26px;
    h2 {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.65);
      letter-spacing: 0.6px;
    }
  }
  .mt-63 {
    margin-top: 25px;
  }

  .mt-162 {
    margin-top: 29px;
  }
  .mt-309 {
    margin-top: 146px;
  }

  .title-procedure {
    h2 {
      font-size: 31px;
      line-height: 38px; /* 122.581% */
      letter-spacing: -0.62px;
      font-weight: 500;
    }
  }
}
</style>
