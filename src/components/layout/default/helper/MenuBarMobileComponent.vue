<template>
  <div :class="isShowListMenu && 'container-mobile-menu-bar'">
    <font-awesome-icon
      :icon="['fas', 'bars']"
      class="icon-bar-mobile"
      @click="isShowListMenu = !isShowListMenu"
    />
    <Transition name="slide-fade">
      <div v-if="isShowListMenu">
        <div class="menu-header-mobile">
          <ul>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
                >Trang chủ</router-link
              >
            </li>
            <li>
              <router-link
                :to="{
                  name: 'about'
                }"
              >
                Về chúng tôi
              </router-link>
            </li>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
                >Tin Tức</router-link
              >
            </li>
            <li>
              <router-link
                :to="{
                  name: 'home'
                }"
                >Nổi Bật</router-link
              >
            </li>
          </ul>
        </div>
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="icon-close-header"
          @click="isShowListMenu = false"
        />
        <button class="btn-booking-mb button-effect">Đặt Phòng</button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s linear;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);

  .redirect-booking-room-mb,
  .icon-close-header {
    display: none;
  }
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.icon-bar-mobile {
  font-size: 23px;
}
.container-mobile-menu-bar {
  position: relative;
  width: 100%;
  height: 100%;
}
.menu-header-mobile {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ul {
    padding: 20px;
    text-align: center;

    li {
      margin-top: 45px;

      &:first-child {
        margin-top: 0px;
      }
      a {
        font-size: 22px;
        color: #000000;
      }
    }
  }
}
.redirect-booking-room-mb {
  color: #fff;
  width: 100%;
  font-size: 22px;
  display: block;
  position: absolute;
  bottom: 0px;
  .btn-booking-mb {
    padding: 10px 0px;
    border: none;
    outline: none;
    width: 100%;
  }
}

.icon-close-header {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 38px;
  font-weight: 100;
}
</style>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits(['updateFixMobie'])

const isShowListMenu = ref(false)
const route = useRoute()
watch(
  () => isShowListMenu.value,
  () => {
    emit('updateFixMobie', isShowListMenu.value)
  }
)

watch(
  () => route.path,
  () => {
    isShowListMenu.value = false
  }
)
</script>
