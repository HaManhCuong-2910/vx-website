<template>
  nav
  <Transition name="nave-fade">
    <nav
      class="navigation"
      :class="[!isShowNav || !isHome ? 'bg-PriNav' : '', isFixFullScreen && 'fix-full-screen']"
    >
      <div class="container m-auto d-flex justify-content-space-between align-items-center">
        <svg
          viewBox="0 0 335 23"
          fill="none"
          @click="handleBackHome"
          class="logo"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0800781 21.672V0.448H2.79608V9.94H15.2281V0.448H17.9441V21.672H15.2281V11.256H2.79608V21.672H0.0800781Z"
            fill="#B48A00"
          />
          <path
            d="M41.8952 18.928C39.7112 20.9813 37.0419 22.008 33.8872 22.008C30.7326 22.008 28.0632 20.9813 25.8792 18.928C23.6952 16.8747 22.6032 14.2333 22.6032 11.004C22.6032 7.77467 23.6859 5.13333 25.8512 3.08C28.0352 1.02667 30.7139 0 33.8872 0C37.0419 0 39.7112 1.02667 41.8952 3.08C44.0792 5.13333 45.1712 7.77467 45.1712 11.004C45.1712 14.2333 44.0792 16.8747 41.8952 18.928ZM33.9992 20.832C36.2206 20.832 38.1059 20.0387 39.6552 18.452C41.2232 16.8467 42.0072 14.56 42.0072 11.592C42.0072 8.38133 41.2232 5.84267 39.6552 3.976C38.1059 2.10933 36.1459 1.176 33.7752 1.176C31.5352 1.176 29.6312 1.96933 28.0632 3.556C26.5139 5.14267 25.7392 7.42 25.7392 10.388C25.7392 13.6173 26.5232 16.1653 28.0912 18.032C29.6592 19.8987 31.6286 20.832 33.9992 20.832Z"
            fill="#B48A00"
          />
          <path
            d="M64.1668 21.672L60.7788 13.692H51.5668L48.2068 21.672H46.6388L55.6828 0.279999H57.9788L67.0788 21.672H64.1668ZM52.1268 12.376H60.2188L56.1588 2.856L52.1268 12.376Z"
            fill="#B48A00"
          />
          <path
            d="M72.0009 0.448L86.7289 17.444V0.448H88.1849V21.672H86.7289L72.0009 4.508V21.672H70.5449V0.448H72.0009Z"
            fill="#B48A00"
          />
          <path
            d="M105.002 0C106.253 0 107.513 0.130666 108.782 0.391999C110.051 0.634666 111.087 0.989333 111.89 1.456L112.394 6.664H111.554L110.07 2.632C109.883 2.14667 109.258 1.78267 108.194 1.54C107.149 1.29733 106.029 1.176 104.834 1.176C103.919 1.176 103.051 1.27867 102.23 1.484C101.409 1.67067 100.606 1.99733 99.822 2.464C99.038 2.93067 98.366 3.50933 97.806 4.2C97.246 4.89067 96.7887 5.77733 96.434 6.86C96.098 7.924 95.93 9.128 95.93 10.472C95.93 13.608 96.742 16.1093 98.366 17.976C100.009 19.8427 102.258 20.776 105.114 20.776C107.186 20.776 108.875 20.4307 110.182 19.74V12.544H104.078V11.228H112.898V20.272C110.751 21.4293 108.073 22.008 104.862 22.008C101.297 22.008 98.394 21.0187 96.154 19.04C93.9326 17.0427 92.822 14.364 92.822 11.004C92.822 7.66267 93.9513 4.99333 96.21 2.996C98.4873 0.998666 101.418 0 105.002 0Z"
            fill="#B48A00"
          />
          <path
            d="M135.736 0C136.987 0 138.247 0.130666 139.516 0.391999C140.786 0.634666 141.822 0.989333 142.624 1.456L143.128 6.664H142.288L140.804 2.632C140.618 2.14667 139.992 1.78267 138.928 1.54C137.883 1.29733 136.763 1.176 135.568 1.176C134.654 1.176 133.786 1.27867 132.964 1.484C132.143 1.67067 131.34 1.99733 130.556 2.464C129.772 2.93067 129.1 3.50933 128.54 4.2C127.98 4.89067 127.523 5.77733 127.168 6.86C126.832 7.924 126.664 9.128 126.664 10.472C126.664 13.608 127.476 16.1093 129.1 17.976C130.743 19.8427 132.992 20.776 135.848 20.776C137.92 20.776 139.61 20.4307 140.916 19.74V12.544H134.812V11.228H143.632V20.272C141.486 21.4293 138.807 22.008 135.596 22.008C132.031 22.008 129.128 21.0187 126.888 19.04C124.667 17.0427 123.556 14.364 123.556 11.004C123.556 7.66267 124.686 4.99333 126.944 2.996C129.222 0.998666 132.152 0 135.736 0Z"
            fill="#B48A00"
          />
          <path d="M149.24 21.672V0.448H151.956V21.672H149.24Z" fill="#B48A00" />
          <path
            d="M172.995 21.672L169.607 13.692H160.395L157.035 21.672H155.467L164.511 0.279999H166.807L175.907 21.672H172.995ZM160.955 12.376H169.047L164.987 2.856L160.955 12.376Z"
            fill="#B48A00"
          />
          <path
            d="M180.829 0.448L195.557 17.444V0.448H197.013V21.672H195.557L180.829 4.508V21.672H179.373V0.448H180.829Z"
            fill="#B48A00"
          />
          <path
            d="M213.83 0C215.081 0 216.341 0.130666 217.61 0.391999C218.879 0.634666 219.915 0.989333 220.718 1.456L221.222 6.664H220.382L218.898 2.632C218.711 2.14667 218.086 1.78267 217.022 1.54C215.977 1.29733 214.857 1.176 213.662 1.176C212.747 1.176 211.879 1.27867 211.058 1.484C210.237 1.67067 209.434 1.99733 208.65 2.464C207.866 2.93067 207.194 3.50933 206.634 4.2C206.074 4.89067 205.617 5.77733 205.262 6.86C204.926 7.924 204.758 9.128 204.758 10.472C204.758 13.608 205.57 16.1093 207.194 17.976C208.837 19.8427 211.086 20.776 213.942 20.776C216.014 20.776 217.703 20.4307 219.01 19.74V12.544H212.906V11.228H221.726V20.272C219.579 21.4293 216.901 22.008 213.69 22.008C210.125 22.008 207.222 21.0187 204.982 19.04C202.761 17.0427 201.65 14.364 201.65 11.004C201.65 7.66267 202.779 4.99333 205.038 2.996C207.315 0.998666 210.246 0 213.83 0Z"
            fill="#B48A00"
          />
          <path
            d="M233.896 21.672V0.448H236.612V9.94H249.044V0.448H251.76V21.672H249.044V11.256H236.612V21.672H233.896Z"
            fill="#B48A00"
          />
          <path
            d="M275.712 18.928C273.528 20.9813 270.858 22.008 267.704 22.008C264.549 22.008 261.88 20.9813 259.696 18.928C257.512 16.8747 256.42 14.2333 256.42 11.004C256.42 7.77467 257.502 5.13333 259.668 3.08C261.852 1.02667 264.53 0 267.704 0C270.858 0 273.528 1.02667 275.712 3.08C277.896 5.13333 278.988 7.77467 278.988 11.004C278.988 14.2333 277.896 16.8747 275.712 18.928ZM267.816 20.832C270.037 20.832 271.922 20.0387 273.472 18.452C275.04 16.8467 275.824 14.56 275.824 11.592C275.824 8.38133 275.04 5.84267 273.472 3.976C271.922 2.10933 269.962 1.176 267.592 1.176C265.352 1.176 263.448 1.96933 261.88 3.556C260.33 5.14267 259.556 7.42 259.556 10.388C259.556 13.6173 260.34 16.1653 261.908 18.032C263.476 19.8987 265.445 20.832 267.816 20.832Z"
            fill="#B48A00"
          />
          <path
            d="M287.588 21.672V1.764H279.496V0.448H298.424V1.764H290.332V21.672H287.588Z"
            fill="#B48A00"
          />
          <path
            d="M301.818 21.672V0.448H315.818V1.764H304.534V9.94H314.194V11.256H304.534V20.356H315.818V21.672H301.818Z"
            fill="#B48A00"
          />
          <path d="M320.494 21.672V0.448H323.21V20.356H334.326V21.672H320.494Z" fill="#B48A00" />
        </svg>
        <div class="d-flex align-items-center container-list-nav">
          <ul class="d-flex">
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
                >Trang chủ</router-link
              >
            </li>
          </ul>
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
  background: rgba(255, 255, 255, 0.05);
  transition: 0.7s;
  backdrop-filter: blur(4px);

  .logo {
    height: 22.01px;
    cursor: pointer;
  }

  ul {
    li {
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      margin-right: 42px;
      cursor: pointer;

      a {
        color: #ffffff;
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
// import { isMobile } from '@/constant/helper'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuBarMobileComponent from './helper/MenuBarMobileComponent.vue'
const isShowNav = ref<boolean>(true)
onMounted(() => {
  window.addEventListener('scroll', (e: any) => {
    const currentScroll = document.documentElement.scrollTop
    if (currentScroll > 200) {
      isShowNav.value = false
    } else {
      isShowNav.value = true
    }
  })
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
