<template>
  <div class="container-custom mx-auto">
    <div class="container-text">
      <h1 ref="title">sứ mệnh của VX Creative Studio</h1>
      <p ref="content">
        Với vai trò là một đối tác về sáng tạo và tư vấn hỗ trợ cho doanh nghiệp, VX Creative Studio
        chú trọng đến độ hoàn thiện của sản phẩm với chất lượng cao và sự chỉn chu trong mỗi sản
        phẩm thiết kế.
      </p>
    </div>

    <div class="flex justify-between mt-263 contain-text">
      <p class="title-large font-family-helvetica">
        Khám phá những dự án trải nghiệm của chúng tôi
      </p>
      <div class="text-next">
        <p>
          Dưới đây là những dự án sáng tạo đầy tâm huyết của đội ngũ VX Creative Studio đã có cơ hội
          thực hiện
        </p>
        <WatchMoreComponentVue />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ScrollReveal from 'scrollreveal'
import WatchMoreComponentVue from '../common/until/WatchMoreComponent.vue'

const title = ref(null)
const content = ref(null)
watch(
  () => [title.value, content.value],
  () => {
    if (title.value && content.value) {
      ScrollReveal().reveal(title.value, {
        delay: 200,
        duration: 800,
        distance: '80px',
        opacity: 0,
        origin: 'bottom',
        easing: 'ease'
      })
      ScrollReveal().reveal(content.value, {
        delay: 200,
        duration: 800,
        distance: '80px',
        opacity: 0,
        origin: 'bottom',
        easing: 'ease'
      })
    }
  }
)
</script>

<style lang="scss" scoped>
.container-text {
  max-width: 1380px;
  h1 {
    color: rgba(255, 255, 255, 0.65);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.9px;
    text-transform: uppercase;
  }
  p {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 65px;
    font-weight: 500;
    line-height: 85px;
    letter-spacing: -2.44px;
    margin-top: 30px;
  }
}

.title-large {
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -1.44px;
  max-width: 782px;
}
.text-next {
  max-width: 478px;
  margin-right: 263px;
  p {
    font-size: 28px;
    line-height: 42px;
  }
}
.mt-263 {
  margin-top: 263px;
}

@media screen and (max-width: 992px) {
  .container-text {
    h1 {
      font-size: 10px;
    }

    p {
      margin-top: 21px;
      font-size: 22px;
      line-height: 27px; /* 122.727% */
      letter-spacing: -0.44px;
    }
  }

  .mt-263 {
    margin-top: 129px;
  }

  .contain-text {
    flex-direction: column;
  }

  .title-large {
    max-width: 290px;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: -0.44px;
  }

  .text-next {
    max-width: 100%;
    margin-right: 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 19px;
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      margin-right: 17px;
    }
  }
}
</style>
