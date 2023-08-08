<template>
  <component :is="data.layout">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </component>
</template>

<style></style>

<style></style>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const data = reactive({
  layout: ''
})
watch(
  () => route.name,
  () => {
    data.layout = route.meta.layout as any
  }
)
</script>
