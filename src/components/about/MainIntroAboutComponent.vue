<template>
  <div class="container-custom mx-auto z-10 relative">
    <div class="mt-276">
      <TextHistoryComponentVue />
    </div>
    <div v-if="!isMobile()">
      <div class="mt-62" v-for="(item, index) in dataHistories" :key="index">
        <HistoryCardComponentVue :data="item" :index="index + 1" />
      </div>
    </div>
    <div v-else>
      <HistoryCardMobileComponent :dataHistories="dataHistories" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import HistoryCardComponentVue from './helper/HistoryCardComponent.vue'
import HistoryCardMobileComponent from './helper/HistoryCardMobileComponent.vue'
import TextHistoryComponentVue from './helper/TextHistoryComponent.vue'

const dataHistories = [
  {
    year: 2021,
    title: 'VX Team Creative',
    content: `Đây là khởi đầu thai nghén một đội ngũ <br />
      sáng tạo của VX team. Với hành trình đầu tiên tạo <br />
      nên những giá trị cho doanh nghiệp`
  },
  {
    year: 2022,
    title: 'Scale Up Creative Services',
    content: `2022 là năm VX gia tăng thêm về những số <br/> 
    lượng cũng như chất lượng dịch vụ nhằm đảm <br/>
    bảo về tính toàn diện trong hành trình trải <br/>
    nghiệm dịch vụ của các doanh nghiệp.`
  },
  {
    year: 2023,
    title: 'VX Creative Studio',
    content: `VX chính thức thành lập công ty và đứng tên pháp <br/>
    nhân nhằm đảm bảo các quyền lợi của đội ngũ và <br/>
    bảo đảm pháp lý cho các bên doanh nghiệp hợp <br/>
    tác trên chặng đường phát triển doanh nghiệp.`
  }
]
</script>

<style scoped lang="scss">
.mt-276 {
  margin-top: 276px;
}
.mt-62 {
  margin-top: 62px;
}
@media screen and (max-width: 992px) {
  .mt-276 {
    margin-top: 127px;
  }
}
</style>
