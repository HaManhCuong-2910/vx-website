<template>
  <div>
    <ul class="lg:pb-[32px]" style="max-height: 362px">
      <li>
        <router-link
          :to="{
            name: 'Service'
          }"
        >
          Dịch vụ
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'aboutUs'
          }"
        >
          Về chúng tôi
        </router-link>
      </li>

      <li>
        <router-link
          :to="{
            name: 'Project'
          }"
        >
          Dự án
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'News'
          }"
        >
          Tin tức
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'Contact'
          }"
        >
          Liên hệ
        </router-link>
      </li>
    </ul>
    <LineAnimateComponent />
    <div>
      <LeftSideFormContactComponent
        v-if="!isMobile()"
        :isUnsetBorderRight="true"
        :class="'custom-mega-menu'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LineAnimateComponent from '@/components/util/LineAnimateComponent.vue'
import LeftSideFormContactComponent from '@/components/contact/LeftSideFormContactComponent.vue'
import { isMobile } from '@/constant/helper'
</script>

<style scoped lang="scss">
ul {
  li {
    a {
      font-family: SVN-TT Hoves;
      color: #fff;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0px;
      &:hover {
        color: #3939e5;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  ul {
    padding-top: 24px;
    padding-bottom: 21px;
    li {
      a {
        font-size: 30px;
      }
    }
  }
}
</style>
