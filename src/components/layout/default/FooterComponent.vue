<template>
  <div class="bg-footer">
    <div class="container-custom mx-auto footer-container">
      <div class="grid grid-cols-4 gap-x-10">
        <div class="address-container">
          <h3>Trụ sở văn phòng</h3>
          <div class="item-address">
            <h4>Địa chỉ:</h4>
            <p>
              Tầng 11 phòng 18 tòa D’el Dorado Tân Hoàng Minh 659a Lạc Long Quân, Xuân La, Tây Hồ,
              Hà Nội
            </p>
          </div>
          <div class="item-address">
            <h4>Hotline:</h4>
            <p>
              (+84) 971 461 736 <br />
              (+84) 862 967 170
            </p>
          </div>
          <div class="item-address">
            <h4>E-mail:</h4>
            <p>creativestudio.vx@gmail.com</p>
          </div>
        </div>
        <div class="col-span-2">
          <div class="more-container">
            <h3>Khám phá thêm</h3>
            <ul>
              <li>VỀ CHÚNG TÔI</li>
              <li>DỊCH VỤ</li>
              <li>DỰ ÁN</li>
              <li>TIN TỨC</li>
              <li>LIÊN HỆ</li>
              <li>TUYỂN DỤNG</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="register-container">
            <h3>Đăng ký nhận thông tin</h3>
            <div class="lg:mt-6">
              <InputAnimatePlaceholderComponent
                v-model:value="data.name"
                :label="'Điền e-mail của bạn'"
              />
            </div>
          </div>
          <div class="social-container">
            <h3>Social Media</h3>
            <div class="lg:mt-5">
              <div>
                <img src="/icon/fb-footer.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  padding: 100px 0px;
}
.bg-footer {
  background-image: url('/img/vx_footer.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
h3 {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
.address-container {
  .item-address {
    margin-top: 24px;

    h4 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
    }

    p {
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.81);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }
}

.more-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  ul {
    margin-top: 45px;

    li {
      color: rgba(255, 255, 255, 0.81);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 1.12px;
      margin-bottom: 14px;
    }
  }
}

.register-container {
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import InputAnimatePlaceholderComponent from '@/components/common/InputAnimatePlaceholderComponent.vue'
const data = reactive({
  name: ''
})
</script>
