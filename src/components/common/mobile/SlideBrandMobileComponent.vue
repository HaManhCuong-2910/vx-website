<template>
  <div
    class="container-custom mx-auto"
    :class="props.theme ? props.theme : ''"
    v-if="slideBrand.length > 0"
  >
    <div
      class="slide-items"
      v-for="item in slideBrand"
      :key="item.tag"
      @click="redirectToDetail(item._id)"
    >
      <p class="tag">{{ item.tag }}</p>
      <h2 class="font-family-helvetica">
        {{ item.title }}
      </h2>
      <div class="breaking-news">
        <p>{{ moment(item.updatedAt).format('DD.MM.YYYY') }} - {{ item.tag }}</p>
        <span class="bg-primary"></span>
        <p>News</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getListNewsApi } from '@/api/news'
import { onMounted, ref } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'
const props = defineProps({
  theme: String
})

const slideBrand = ref<any[]>([])

onMounted(async () => {
  const [res, err] = await getListNewsApi({ isOutstanding: true, page: 1, limit: 4 })
  slideBrand.value = res.data
})

const router = useRouter()

const redirectToDetail = (id: string) => {
  router.push({
    name: 'DetailNews',
    params: {
      id
    }
  })
}
</script>

<style scoped lang="scss">
.slide-items {
  padding-top: 40px;
  padding-bottom: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
  .tag {
    color: rgba(255, 255, 255, 0.65);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px; /* 122.727% */
    letter-spacing: -0.44px;
    margin-top: 13px;
    max-width: 322px;
  }
}

.dark {
  .slide-items {
    border-top: 1px solid rgba(0, 0, 0, 0.22);
    .tag {
      color: rgba(0, 0, 0, 0.65);
    }
    h2 {
      color: #000;
    }
    .breaking-news {
      p {
        color: #000;
      }
    }
  }
}
</style>
