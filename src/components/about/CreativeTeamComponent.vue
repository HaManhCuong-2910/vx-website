<template>
  <div class="container-custom mx-auto">
    <div class="container-content">
      <h2 class="font-family-helvetica">Đội ngũ sáng tạo</h2>
      <p>
        Đội ngũ sáng tạo năng động cùng nhiều năm kinh <br />
        nghiệm với việc trải qua một số dự án mang tính trọng <br />
        điểm, chúng tôi, đội ngũ làm sáng tạo và truyền thông <br />
        của VX Creative Studio mong muốn sẽ được đồng hành <br />
        cùng khách hàng để giải quyết những bài toán mang <br />
        tính chiến lược và dự án lớn trong tương lai.
      </p>
    </div>
    <div class="mt-89">
      <ListStaffComponent />
    </div>
  </div>
  <div class="mt-346 pb-149">
    <ConnectUsComponent />
  </div>
</template>

<script setup lang="ts">
import ListStaffComponent from './helper/ListStaffComponent.vue'
import ConnectUsComponent from '../common/ConnectUsComponent.vue'
</script>

<style scoped lang="scss">
.mt-89 {
  margin-top: 89px;
}
.mt-346 {
  margin-top: 346px;
}
.pb-149 {
  padding-bottom: 149px;
}
.container-content {
  h2 {
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    margin-top: 24px;
    color: #fff;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
}

@media screen and (max-width: 992px) {
  .container-content {
    h2 {
      font-size: 32px;
      line-height: 56px; /* 175% */
      letter-spacing: -0.32px;
      font-weight: 500;
    }
    p {
      margin-top: 11px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .mt-89 {
    margin-top: 60px;
  }

  .mt-346 {
    margin-top: 86px;
  }

  .pb-149 {
    padding-bottom: 0px;
  }
}
</style>
