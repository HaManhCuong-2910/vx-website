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
    <ApproachesTimeLineComponent :data-time-line="dataTimeLine" />
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
    <ApproachesTimeLineComponent :data-time-line="dataTimeLine" />
  </div>
  <div class="mt-309">
    <ListServiceComponent />
  </div>
  <div class="mt-162 pb-100">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import ApproachesTimeLineComponent from './helper/ApproachesTimeLineComponent.vue'
import LineAnimateComponent from '../util/LineAnimateComponent.vue'
import ListServiceComponent from '../common/ListServiceComponent.vue'
import ConnectUsComponent from '../common/ConnectUsComponent.vue'
import { ref } from 'vue'

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
