<template>
  <div class="list-card">
    <div
      class="list-card__item"
      :class="[cardActive === index && 'active']"
      v-for="(item, index) in listCard"
      :key="index"
      @click="switchCard(index)"
    >
      <div class="flex items-start" v-if="!isMobile()">
        <img :src="cardActive === index ? '/icon/tru.svg' : '/icon/plus.svg'" />
        <p class="count">{{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}</p>
        <div class="content-title">
          <h2>{{ item.title }}</h2>
          <p v-if="cardActive === index">{{ item.content }}</p>
        </div>
      </div>
      <div class="flex items-start gap-x-10" v-if="isMobile()">
        <p class="count">{{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}</p>
        <div class="content-title">
          <h2>{{ item.title }}</h2>
        </div>
        <img :src="cardActive === index ? '/icon/tru.svg' : '/icon/plus.svg'" />
      </div>
      <p v-if="cardActive === index && isMobile()" class="content-mb">{{ item.content }}</p>
      <div class="list-content" v-if="cardActive === index">
        <div class="grid grid-cols-2 gap-x-10 gap-y-1">
          <div v-for="contentItem in item.listContent" :key="contentItem">
            <p>+ {{ contentItem }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/constant/helper'
import { ref } from 'vue'
const cardActive = ref(0)
const listCard = ref([
  {
    title: 'Brand eXperience Stragtegy & Identity',
    content:
      'Trải nghiệm chiến lược và nhận diện thương hiệu toàn diện là mục tiêu mà VX Creative Studio hướng tới.',
    listContent: [
      'Brand Consultancy',
      'Brand Identity Design',
      'Rebranding',
      'Brand Editorial',
      'Brand Strategy',
      'Brand Maintaince'
    ]
  },
  {
    title: 'Physical eXperience Packaging Design',
    content:
      'Bao bì hay trải nghiệm thương hiệu vật lý là một phần thiết yếu trong việc nhận diện thương hiệu của một sản phẩm. VX cũng coi đó là một phần trong trải nghiệm thương hiệu.',
    listContent: [
      'Product Consultant',
      'Packaging Design',
      'Product Visual Design',
      'Packaging Adapt',
      'Product Identity',
      'Packaging Maintaince'
    ]
  },
  {
    title: 'User eXperience - User Interactive Design',
    content:
      'Trải nghiệm người dùng và tương tác là một mảnh ghép không thể thiếu của doanh nghiệp nhằm giúp doanh nghiệp chuyển đổi số trong thời đại công nghệ 4.0. Đây cũng là phân mảng mà VX muốn tập trung và tư vấn cho doanh nghiệp.',
    listContent: [
      'UX Research',
      'UI Design',
      'Persona Reach',
      'Multiple Platform',
      'UI Concept',
      'Product Developement'
    ]
  },
  {
    title: 'Performance Marketing',
    content:
      'Tiếp thị truyền thông số là một mảnh ghép cuối cùng để giúp doanh nghiệp xuất hiện cũng như đến với thị trường bằng nội dung số nhằm đưa thương hiệu đến với đông đảo người tiêu dùng hơn trên thị trường số hiện nay.',
    listContent: [
      'Brand Lunch',
      'UI Design',
      'S-M Communication',
      'Multiple Platform',
      'TVC Concept',
      'Product Developement'
    ]
  }
])

const switchCard = (index) => {
  cardActive.value = index
}
</script>

<style scoped lang="scss">
.list-card {
  .list-card__item {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    padding: 27px 0px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:last-child {
      border-bottom: unset;
    }
    &.active {
      animation: fade ease-in 0.4s;
      .count,
      h2 {
        color: #fff;
      }

      img {
        margin-top: 18px;
      }

      .list-content {
        p {
          color: #ddd;
          font-size: 16px;
          font-weight: 300;
          line-height: 29px;
        }
        margin-right: 50px;
      }
    }
    img {
      margin-top: 8px;
    }
    .content-title {
      margin-left: 24px;
      max-width: 357px;
      p {
        overflow: hidden;
        color: #fff;
        font-size: 16px;
        line-height: 22px;
        margin-top: 26px;
        animation: fade-show ease-in 0.5s;
      }
    }
    .count,
    h2 {
      color: rgba(255, 255, 255, 0.25);
      font-size: 34px;
      font-weight: 500;
      line-height: 43px;
      letter-spacing: -0.36px;
    }

    .count {
      margin-left: 24px;
    }
  }
}

@media screen and (max-width: 992px) {
  .list-card {
    .list-card__item {
      flex-direction: column;

      .content-title {
        margin-left: 0px;
      }

      h2,
      .count {
        font-size: 22px;
        line-height: 25px; /* 113.636% */
        letter-spacing: -0.22px;
      }

      img {
        width: 25px;
        height: 25px;
      }

      .content-mb {
        animation: fade-show ease-in 0.5s;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        margin-top: 18px;
        line-height: 20px;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
      }

      .count {
        margin-left: 0px;
      }

      .list-content {
        margin-top: 20px;
        margin-right: 0px;
        p {
          font-size: 12px;
          font-weight: 300;
          line-height: 17px;
        }
      }

      &.active {
        .list-content {
          margin-top: 20px;
          margin-right: 0px;
          p {
            font-size: 12px;
            font-weight: 300;
            line-height: 17px;
          }
        }
      }
    }
  }
}
</style>
