<template>
  <div class="flex lg:justify-between relative">
    <span class="vector-ab"></span>
    <div class="card-container">
      <h3 class="font-family-helvetica">
        Đồng hành <br />
        và tận tâm
      </h3>
      <p>
        Với vai trò là một đơn vị tư vấn & hỗ trợ sáng tạo, chúng tôi mong <br />
        muốn được thực hiện những dự án mang tính chiến lược, nhờ đó <br />
        giúp doanh nghiệp có thể phát triển đường dài khi cùng đồng <br />
        hành làm việc với đội ngũ của chúng tôi.
      </p>
    </div>
    <div class="card-container pt-358">
      <h3 class="font-family-helvetica">
        Sáng tạo <br />
        và đổi mới
      </h3>
      <p>
        Đối với chúng tôi, mỗi dự án đều là một thách thức cũng như một <br />
        cơ hội để chúng tôi học hỏi cũng như trau dồi thêm để từ đó, VX <br />
        sẽ nhiều kinh nghiệm và động lực để chúng tôi phát triển hơn qua <br />
        từng dự án thiết kế sáng tạo.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.vector-ab {
  position: absolute;
  display: block;
  width: 1px;
  height: 760px;
  background: linear-gradient(#000, #fff, #000);
  transform: rotate(45deg);
  opacity: 0.3;
  left: 50%;
}
.card-container {
  h3 {
    color: #fff;
    font-size: 140px;
    font-style: normal;
    font-weight: 700;
    line-height: 107%;
  }

  p {
    margin-top: 50px;
    color: #fff;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }

  &.pt-358 {
    padding-top: 358px;
  }
}
</style>
