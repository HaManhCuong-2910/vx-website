<template>
  <Transition name="nave-fade">
    <nav
      class="navigation"
      :class="[!isShowNav || !isHome ? 'bg-PriNav' : '', isFixFullScreen && 'fix-full-screen']"
    >
      <div class="container-custom mx-auto d-flex justify-content-space-between align-items-center">
        <svg
          width="136"
          height="66"
          viewBox="0 0 136 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_570_1156)">
            <path
              d="M35.85 62.41L3.75 0H0L33.68 65.74H37.9L71.5 0H68.03L35.85 62.41Z"
              fill="white"
            />
            <path
              d="M107.56 33.89L135.12 0H131.04L104.32 32.76L74.7701 0H70.4102L100.97 33.89H98.8801L71.3202 65.73H75.4002L102.02 35.06L129.69 65.74H134.05L105.33 33.89H107.56Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_570_1156">
              <rect width="135.12" height="65.74" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div class="d-flex align-items-center container-list-nav">
          <ul class="d-flex">
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
              >
                VỀ CHÚNG TÔI
              </router-link>
            </li>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
              >
                DỊCH VỤ
              </router-link>
            </li>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
              >
                DỰ ÁN
              </router-link>
            </li>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
              >
                TIN TỨC
              </router-link>
            </li>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
              >
                LIÊN HỆ
              </router-link>
            </li>
          </ul>
          <div class="icon-menu">
            <img src="@/assets/icon/header_menu.svg" />
          </div>
        </div>
        <!-- <MenuBarMobileComponent
          v-if="isMobile()"
          @updateFixMobie="handleChangeFixFullScreen($event)"
        /> -->
      </div>
    </nav>
  </Transition>
</template>

<style lang="scss" scoped>
.nave-fade-enter-active {
  transition: all 0.3s ease-out;
}

.nave-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.nave-fade-enter-from,
.nave-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 0px;
  background: rgba(255, 255, 255, 0.01);
  transition: 0.7s;
  z-index: 11;
  backdrop-filter: blur(7.5px);

  .logo {
    height: 22.01px;
    cursor: pointer;
  }

  ul {
    li {
      font-weight: 400;
      font-size: 14px;
      margin-right: 82px;
      cursor: pointer;

      a {
        color: #ffffff;

        &:hover{
          color: #3939e5;
        }
      }

      &:last-child {
        margin-right: 122px;
      }
    }
  }

  ::v-deep .icon-bar-mobile {
    color: #ffffff;
  }

  .redirect-booking-room {
    color: #ffffff !important;
    .btn-booking {
      outline: none;
      border: none;
      font-weight: 400;
      font-size: 22px;

      padding: 10px 34px 13px 34px;
      cursor: pointer;
    }
  }
}

.bg-PriNav {
  background: #ffffff;
  z-index: 2;
  transition: 0.7s;

  ul {
    li {
      color: #000000;
      a {
        color: #000000;
      }
    }
  }
}

@media screen and (max-width: 1873px) {
  .navigation {
    padding: 20px 0px;
  }
}

@media screen and (max-width: 992px) {
  .navigation {
    &.fix-full-screen {
      height: 100vh;
      background: #ffffff;
      z-index: 11;

      .container {
        height: 100%;
      }

      .logo {
        display: none !important;
      }

      ::v-deep .icon-bar-mobile {
        display: none !important;
      }
    }

    .logo {
      height: 15.01px;

      path {
        fill: #ffffff;
      }
    }

    &.bg-PriNav {
      .logo {
        path {
          fill: #000000;
        }
      }

      ::v-deep .icon-bar-mobile {
        color: #000000;
      }
    }
  }
  .container-list-nav {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import MenuBarMobileComponent from './helper/MenuBarMobileComponent.vue'
const isShowNav = ref<boolean>(true)
onMounted(() => {
  // window.addEventListener('scroll', (e: any) => {
  //   const currentScroll = document.documentElement.scrollTop
  //   if (currentScroll > 200) {
  //     isShowNav.value = false
  //   } else {
  //     isShowNav.value = true
  //   }
  // })
})
const router = useRouter()

const route = useRoute()

const isHome = ref<boolean>(true)

const handleBackHome = () => {
  if (route.path === '/') {
    window.scrollTo(0, 0)
    return
  }

  router.push({
    name: 'home'
  })
}
const isFixFullScreen = ref(false)
const handleChangeFixFullScreen = (event) => {
  isFixFullScreen.value = event
}

watch(
  () => route.path,
  (value) => {
    isHome.value = value === '/'
  }
)

onMounted(() => {
  isHome.value = route.path === '/'
})
</script>
