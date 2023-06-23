<template>
  <div class="mt-159 mb-159 h-100-vh">
    <div class="w-60 ml-auto">
      <div class="title">
        <h2>Năng lực chuyên môn của chúng tôi</h2>
      </div>
      <div class="list-card">
        <div
          class="list-card__item"
          :class="[cardActive === index && 'active']"
          v-for="(item, index) in listCard"
          :key="index"
          @click="switchCard(index)"
        >
          <div class="flex items-start">
            <img :src="cardActive === index ? '/icon/tru.svg' : '/icon/plus.svg'" />
            <p class="count">{{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}</p>
            <div class="content-title">
              <h2>{{ item.title }}</h2>
              <p v-if="cardActive === index">{{ item.content }}</p>
            </div>
          </div>

          <div class="list-content" v-if="cardActive === index">
            <div class="grid grid-cols-2 gap-x-20 gap-y-2">
              <div v-for="contentItem in item.listContent" :key="contentItem">
                <p>+ {{ contentItem }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  }
])

const switchCard = (index) => {
  cardActive.value = index
}
</script>

<style lang="scss" scoped>
.mt-159 {
  margin-top: 159px;
}
.mb-159 {
  padding-bottom: 159px;
}
.w-60 {
  width: 60%;
}
.title {
  padding: 44px 0px;
  h2 {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -1.44px;
  }
}

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
          font-size: 20px;
          font-weight: 300;
          line-height: 29px;
        }
        margin-right: 100px;
      }
    }
    img {
      margin-top: 8px;
    }
    .content-title {
      margin-left: 24px;
      max-width: 357px;
      p {
        color: #fff;
        font-size: 17px;
        line-height: 22px;
        margin-top: 26px;
      }
    }
    .count,
    h2 {
      color: rgba(255, 255, 255, 0.25);
      font-size: 36px;
      font-weight: 500;
      line-height: 43px;
      letter-spacing: -0.36px;
    }

    .count {
      margin-left: 24px;
    }
  }
}
@keyframes fade {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
