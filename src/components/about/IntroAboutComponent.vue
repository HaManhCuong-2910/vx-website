<template>
  <div class="intro-home container-custom mx-auto">
    <div class="container-text flex lg:flex-row flex-col">
      <div class="text-custom">
        <h1 class="font-family-helvetica">
          Tại sao lại là <br />
          VX Creative Studio?
        </h1>
        <p>
          VX thành lập với cái tên được lấy cảm hứng bằng 2 từ Visual – eXperience (niềm đam mê về
          sáng tạo bằng nghệ thuật thị giác) với mong muốn đem lại một bản sắc độc đáo riêng tới
          doanh nghiệp bằng nghệ thuật truyền tải thông điệp qua hình ảnh.
        </p>
        <p>
          Chúng tôi hướng đến những sản phẩm chất lượng với độ hoàn thiện ở mức tối đa. Thông qua
          mỗi dự án, thiết kế và trải nghiệm thương hiệu trở nên đồng nhất, qua đó, tạo nên sự hiệu
          quả trong phương thức vận hành thương hiệu của doanh nghiệp cũng như sự tín nhiệm và hài
          lòng của khách hàng.
        </p>
      </div>
      <div class="right-side">
        <img src="/about/vx_about.png" />
        <div class="lg:pt-8 pt-[18px]">
          <p><span>V</span>isual e<span>X</span>perience</p>
          <p>Creative Studio</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScrollReveal from 'scrollreveal'
import { ref, watch } from 'vue'
const title = ref(null)
const content = ref(null)
watch(
  () => [title.value, content.value],
  () => {
    if (title.value && content.value) {
      ScrollReveal().reveal(title.value, {
        duration: 800,
        distance: '80px',
        opacity: 0,
        origin: 'bottom',
        easing: 'ease'
      })
      ScrollReveal().reveal(content.value, {
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
.intro-home {
  position: relative;
  color: #fff;
  z-index: 10;
  padding-top: 245px;
  .container-text {
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 81px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
    .text-custom {
      h1 {
        color: #fff;
        font-size: 72px;
        font-style: normal;
        font-weight: 500;
        line-height: 85px;
        letter-spacing: -1.44px;
      }

      p {
        max-width: 611px;
        color: rgba(255, 255, 255, 0.88);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: -0.48px;
        margin-top: 61px;

        &:last-child {
          margin-top: 25px;
          font-size: 17px;
          line-height: 22px;
        }
      }
    }

    .icon-scroll {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}

.right-side {
  p {
    color: rgba(255, 255, 255, 0.3);
    font-size: 47px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: #fff;
    }
  }
}
@media screen and (max-width: 992px) {
  .intro-home {
    padding-top: 200px;

    .container-text {
      padding-bottom: 21px;
      .text-custom {
        h1 {
          font-size: 31px;
          line-height: 38px;
          letter-spacing: -0.62px;
        }

        p {
          margin-top: 22px;
          font-size: 16px;
          line-height: 21px;

          &:last-child {
            margin-top: 14px;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }

  .right-side {
    margin-top: 35px;
    img {
      width: 100%;
    }

    p {
      font-size: 24px;
      text-align: center;
    }
  }
}
</style>
