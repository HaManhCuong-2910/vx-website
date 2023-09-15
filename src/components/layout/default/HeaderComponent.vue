<template>
  <Transition name="nave-fade">
    <nav class="navigation">
      <div class="container-custom mx-auto d-flex justify-content-space-between align-items-center">
        <router-link
          :to="{
            name: 'home'
          }"
        >
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
        </router-link>

        <div class="d-flex align-items-center container-list-nav">
          <ul class="d-flex">
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
          </ul>
          <div class="icon-menu cursor-pointer" @click="isShowNav = true">
            <img src="@/assets/icon/header_menu.svg" />
          </div>
        </div>
        <div class="icon-menu cursor-pointer" @click="isShowNav = true" v-if="isMobile()">
          <img src="@/assets/icon/header_menu.svg" />
        </div>
      </div>
    </nav>
  </Transition>
  <Transition name="nave-fade">
    <MegaMenuComponentVue v-if="isShowNav" @closeMegaMenu="isShowNav = false" />
  </Transition>
  <el-button
    v-loading.fullscreen="fullscreenLoading"
    element-loading-background="rgba(0, 0, 0, 0.7)"
    type="primary"
    v-show="false"
  >
    As a directive
  </el-button>
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

        &:hover {
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

  svg {
    width: 110px;
    height: 53.518px;
  }
}
</style>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MegaMenuComponentVue from './helper/MegaMenuComponent.vue'
import { useStore } from 'vuex'
import { ElLoading } from 'element-plus'
const isShowNav = ref<boolean>(false)
const fullscreenLoading = ref(false)
const store = useStore()
watch(
  () => store.state.isLoadingGlobal,
  (value: boolean) => {
    fullscreenLoading.value = value
  }
)
onMounted(() => {})
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

watch(
  () => route.path,
  (value) => {
    isHome.value = value === '/'
    isShowNav.value = false
  }
)

onMounted(() => {
  isHome.value = route.path === '/'
})
</script>
