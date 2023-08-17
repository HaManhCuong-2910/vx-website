<template>
  <div class="bg-footer">
    <div class="container-custom mx-auto footer-container">
      <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0 gap-y-10">
        <div class="address-container order-last lg:order-none">
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
              <li>
                <router-link
                  :to="{
                    name: 'aboutUs'
                  }"
                >
                  VỀ CHÚNG TÔI
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'Service'
                  }"
                >
                  DỊCH VỤ
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'Project'
                  }"
                >
                  DỰ ÁN
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'News'
                  }"
                >
                  TIN TỨC
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'Contact'
                  }"
                >
                  LIÊN HỆ
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'Recruitment'
                  }"
                >
                  TUYỂN DỤNG
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="order-first lg:order-none">
          <div class="register-container">
            <h3>Đăng ký nhận thông tin</h3>
            <div class="lg:mt-7 mt-[20px] relative">
              <InputCommonComponent
                v-model:value="data.name"
                :style="'font-size: 20px;'"
                :placeholder="'Điền e-mail của bạn'"
              />
              <div class="submit-btn">
                <img src="/icon/next-icon.svg" />
              </div>
            </div>
          </div>
          <div class="social-container">
            <h3>Social Media</h3>
            <div class="lg:mt-5 flex gap-x-5 mt-[20px]">
              <div
                v-for="item in listSocial"
                :key="item.svg"
                v-html="item.svg"
                @click="openNewTabSocial(item.link)"
              ></div>
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
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
}

.submit-btn {
  position: absolute;
  right: 3px;
  top: 20px;
  cursor: pointer;
  width: 36px;
  height: 19px;
  img {
    width: 100%;
    height: 100%;
  }
}
.address-container {
  .item-address {
    margin-top: 24px;

    h4 {
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 31px;
    }

    p {
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.81);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
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

      a {
        &:hover {
          color: #3939e5;
        }
      }
    }
  }
}
.social-container {
  margin-top: 185px;
}

::v-deep svg {
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    path {
      fill-opacity: 1;
      transition: 0.5s;
    }
  }
}

@media screen and (max-width: 992px) {
  .more-container {
    width: 100%;
    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 31px;
    }
    ul {
      margin-top: 25px;

      li {
        font-size: 14px;
        letter-spacing: 1.12px;
      }
    }
  }

  .bg-footer {
    background-position: 80% 50%;
    background-size: initial;
  }

  .address-container {
    h3 {
      font-size: 18px;
      line-height: 31px;
    }
    .item-address {
      margin-top: 18px;

      h4 {
        font-size: 14px;
      }

      p {
        font-size: 15px;
      }
    }
  }

  .register-container {
    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 31px;
    }
  }

  .social-container {
    margin-top: 70px;
  }
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import InputCommonComponent from '@/components/common/InputCommonComponent.vue'
import { listSocial } from '@/constant/constant'
const data = reactive({
  name: ''
})

const openNewTabSocial = (link: string) => {
  if (!link) return
  window.open(link)
}
</script>
