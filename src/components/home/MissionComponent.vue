<template>
  <div class="container-custom mx-auto">
    <div class="container-text">
      <h1>sứ mệnh của VX Creative Studio</h1>
      <p>
        Với vai trò là một đối tác về sáng tạo và tư vấn hỗ trợ cho doanh nghiệp, VX Creative Studio
        chú trọng đến độ hoàn thiện của sản phẩm với chất lượng cao và sự chỉn chu trong mỗi sản
        phẩm thiết kế.
      </p>
    </div>

    <div class="flex justify-between mt-263">
      <p class="title-large font-family-helvetica">
        Khám phá những dự án trải nghiệm của chúng tôi
      </p>
      <div class="text-next">
        <p>
          Dưới đây là những dự án sáng tạo đầy tâm huyết của đội ngũ VX Creative Studio đã có cơ hội
          thực hiện
        </p>
        <div class="flex container-mal items-center">
          <span>Xem thêm</span>
          <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon-arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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

  .container-mal {
    margin-top: 20px;
    cursor: pointer;
    span {
      font-size: 17px;
      line-height: 22px;
    }
    .icon-arrow {
      margin-left: 7px;
      font-size: 18px;
    }
  }
}
.mt-263 {
  margin-top: 263px;
}
</style>
