<template>
  <div>
    <h2>BÀI VIẾT LIÊN QUAN</h2>
    <ul>
      <li v-for="item in data" :key="item._id">
        <router-link
          :to="{
            name: 'DetailNews',
            params: {
              id: item._id
            }
          }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getRandomListNews } from '@/api/news'
import { onMounted, ref } from 'vue'

const data = ref<any[]>([])

onMounted(async () => {
  const [res, err] = await getRandomListNews()
  data.value = res.data
})
</script>

<style scoped lang="scss">
h2 {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.2px;
  padding-top: 10px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
}

ul {
  li {
    color: #3939e5;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px;
    padding-top: 10px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.13);
    position: relative;

    a {
      &:hover {
        color: #3939e5;
      }
    }

    &::after {
      position: absolute;
      content: '';
      display: block;
      right: 0%;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 12px;
      background-image: url('/icon/arrow-right-2.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
}

@media screen and (max-width: 992px) {
  h2 {
    padding-bottom: 26px;
  }

  ul {
    li {
      font-size: 13px;
      font-weight: 600;
      line-height: 18px; /* 138.462% */

      a {
        display: block;
        max-width: 290px;
      }
    }
  }
}
</style>
