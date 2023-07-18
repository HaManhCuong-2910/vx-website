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
                    name: 'home'
                  }"
                >
                  TUYỂN DỤNG
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="register-container">
            <h3>Đăng ký nhận thông tin</h3>
            <div class="lg:mt-7 relative">
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
            <div class="lg:mt-5 flex gap-x-5">
              <div v-for="item in listSocial" :key="item.svg" v-html="item.svg"></div>
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

.register-container {
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
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import InputCommonComponent from '@/components/common/InputCommonComponent.vue'
const data = reactive({
  name: ''
})

const listSocial = [
  {
    svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10.9914V39.0086C50 45.0813 45.0758 50 39.0086 50H28.2864V30.6331H34.7824L35.7606 23.0875H28.2864V18.2732C28.2864 16.086 28.891 14.5966 32.0235 14.5966H36.0189V7.84788C35.3264 7.75995 32.9578 7.55111 30.1989 7.55111C24.4339 7.55111 20.4935 11.0684 20.4935 17.5258V23.093H13.9756V30.6386H20.4935V50H10.9914C4.91866 50 0 45.0813 0 39.0086V10.9914C0 4.92416 4.91866 0 10.9914 0H39.0086C45.0758 0 50 4.92416 50 10.9914Z" fill="white" fill-opacity="0.5"/>
          </svg>`
  },
  {
    svg: `
        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5413 25.0001C29.5413 26.962 27.942 28.5613 25.98 28.5613C24.0181 28.5613 22.4243 26.962 22.4243 25.0001C22.4243 23.0381 24.0181 21.4443 25.98 21.4443C27.942 21.4443 29.5413 23.0381 29.5413 25.0001Z" fill="white" fill-opacity="0.5"/>
        <path d="M32.8497 13.2168H19.1104C16.401 13.2168 14.1973 15.4206 14.1973 18.13V31.8692C14.1973 34.5786 16.401 36.7824 19.1104 36.7824H32.8497C35.5591 36.7824 37.7629 34.5786 37.7629 31.8692V18.13C37.7629 15.4206 35.5591 13.2168 32.8497 13.2168ZM25.9801 32.2869C21.9627 32.2869 18.6928 29.017 18.6928 24.9996C18.6928 20.9822 21.9627 17.7123 25.9801 17.7123C29.9974 17.7123 33.2674 20.9822 33.2674 24.9996C33.2674 29.017 29.9974 32.2869 25.9801 32.2869ZM33.7565 19.0917C32.7233 19.0917 31.888 18.2564 31.888 17.2287C31.888 16.201 32.7233 15.3656 33.7565 15.3656C34.7842 15.3656 35.6196 16.201 35.6196 17.2287C35.6196 18.2564 34.7842 19.0917 33.7565 19.0917Z" fill="white" fill-opacity="0.5"/>
        <path d="M39.9886 0H11.9714C5.90414 0 0.97998 4.92416 0.97998 10.9914V39.0086C0.97998 45.0813 5.90414 50 11.9714 50H39.9886C46.0558 50 50.98 45.0813 50.98 39.0086V10.9914C50.98 4.92416 46.0558 0 39.9886 0ZM41.4944 31.8696C41.4944 36.6344 37.6144 40.5144 32.8496 40.5144H19.1103C14.3456 40.5144 10.4656 36.6344 10.4656 31.8696V18.1304C10.4656 13.3656 14.3456 9.4911 19.1103 9.4911H32.8496C37.6144 9.4911 41.4944 13.3656 41.4944 18.1304V31.8696Z" fill="white" fill-opacity="0.5"/>
        </svg>
      `
  },
  {
    svg: `
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.7059 25.9727H30.5122C30.754 24.1426 32.0455 22.9775 33.6063 22.9775C35.1671 22.9775 36.4476 24.1426 36.7059 25.9727Z" fill="white" fill-opacity="0.5"/>
          <path d="M39.0086 0H10.9914C4.92416 0 0 4.92416 0 10.9914V39.0086C0 45.0813 4.92416 50 10.9914 50H39.0086C45.0758 50 50 45.0813 50 39.0086V10.9914C50 4.92416 45.0758 0 39.0086 0ZM29.6769 16.4652H37.5082V18.4161H29.6769V16.4652ZM22.2027 33.7272C21.1365 34.2658 19.7846 34.4306 18.5151 34.4306H9.37569V15.2176H19.4328C20.6749 15.2176 24.5219 15.9705 24.5494 19.6637C24.5603 22.2247 23.115 23.3843 21.9004 23.9558C21.9004 23.9558 25.0934 24.9066 25.3517 27.7259C25.599 30.5562 25.0934 32.3093 22.2027 33.7272ZM40.5694 28.4293H30.4957C30.4023 30.6496 32.0235 31.9741 33.8701 31.9741C35.1726 31.9741 36.3761 31.2596 36.9916 30.1055H40.2891C39.3878 33.4084 36.7169 34.7824 33.5898 34.7824C29.479 34.7824 26.5553 31.4849 26.5553 27.4181C26.5553 23.3513 29.7043 20.0539 33.5898 20.0539C37.4698 20.0539 40.6243 23.3513 40.6243 27.4181C40.6243 27.7698 40.6243 28.1051 40.5694 28.4293ZM18.1798 25.9178H13.6019V31.1662H18.1798C18.1798 31.1662 21.2244 31.2376 21.2244 28.5392C21.2244 25.8463 18.1798 25.9178 18.1798 25.9178ZM20.4825 20.7353C20.4825 18.4766 17.927 18.537 17.927 18.537H13.6019V22.9336H17.927C17.927 22.9336 20.4825 22.9996 20.4825 20.7353Z" fill="white" fill-opacity="0.5"/>
          </svg>
        `
  },
  {
    svg: `        
      <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.9473 0H11.9326C5.85914 0 0.939941 4.9247 0.939941 10.9926V39.0129C0.939941 45.0863 5.85914 50.0055 11.9326 50.0055H39.9473C46.0207 50.0055 50.9399 45.0863 50.9399 39.0129V10.9926C50.9399 4.9247 46.0207 0 39.9473 0ZM41.3049 18.1433C41.1785 21.0399 39.1064 25.0247 35.248 30.0484C31.483 34.9236 28.482 37.3255 25.9317 37.8531C25.5964 37.9191 25.2502 37.9576 24.9039 37.9576C22.2547 37.9576 19.6824 30.543 17.9785 24.3212C17.0936 21.1168 16.3406 19.7703 15.4832 19.8142C14.6917 19.8417 13.6364 20.5837 12.5152 21.3807L12.4822 21.4027C12.1249 21.6555 11.6303 21.584 11.3665 21.2378L10.7289 20.4133C10.4706 20.0671 10.52 19.5834 10.8388 19.2976L11.372 18.8469C14.8072 15.8514 18.9898 12.4162 20.8696 12.4162C23.3319 12.4162 23.7112 13.7628 24.4697 16.445C24.5026 16.5714 25.1787 19.5394 25.9317 22.4854C26.6902 25.437 27.5421 28.405 27.9104 28.405C28.1302 28.405 28.8942 27.4266 30.2793 25.2556C31.417 23.4638 32.3349 21.7764 32.5163 21.1443C32.7251 20.4023 32.6867 19.8307 32.4009 19.446C32.0216 18.9623 31.2631 18.8469 30.686 18.8469C30.2408 18.8469 29.8066 18.9073 29.3779 19.0283C29.0426 19.1217 28.7018 18.9238 28.6084 18.5885C28.5754 18.4621 28.5809 18.3302 28.6249 18.2093C30.1639 13.9936 32.923 11.9215 36.8199 12.0589C38.1995 12.1029 39.2768 12.5261 40.0188 13.3286C40.9696 14.3344 41.3928 15.9558 41.3049 18.1433Z" fill="white" fill-opacity="0.5"/>
      </svg>
      `
  }
]
</script>
