<template>
  <div>
    <ul class="lg:pb-[32px]">
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
            name: 'aboutUs'
          }"
        >
          VỀ CHÚNG TÔI
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
    <LineAnimateComponent />
    <div class="lg:mt-[35px]">
      <LeftSideFormContactComponent :isUnsetBorderRight="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LineAnimateComponent from '@/components/util/LineAnimateComponent.vue'
import LeftSideFormContactComponent from '@/components/contact/LeftSideFormContactComponent.vue'
</script>

<style scoped lang="scss">
ul {
  li {
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    a {
      &:hover {
        color: #3939e5;
      }
    }
  }
}
</style>
