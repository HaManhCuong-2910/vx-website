<template>
  <div class="flex justify-between items-end container-hs-card">
    <div class="flex lg:items-end">
      <h4>2021</h4>
      <div class="ml-156 pb-60">
        <p class="title">VX Team Creative</p>
        <div class="hold-content">
          <p class="content">
            Đây là khởi đầu thai nghén một đội ngũ <br />
            sáng tạo của VX team. Với hành trình đầu tiên tạo <br />
            nên những giá trị cho doanh nghiệp
          </p>
        </div>
      </div>
    </div>
    <div class="line-num">
      <span>Giai đoạn</span>
      <p>01</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h4 {
  transition: 0.7s;
  color: #000;
  -webkit-text-stroke: 2px #fff;
  font-size: 200px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -6px;
}
.ml-156 {
  margin-left: 156px;
}
.pb-60 {
  padding-bottom: 60px;
}
.title {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.32px;
}
.hold-content {
  visibility: hidden;
  overflow-y: hidden;
  transition: 0.5s;
  max-height: 0px;
  .content {
    transition: 0.7s;
    transform: translateY(-100px);
    opacity: 0;
    color: rgba(255, 255, 255, 0.86);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 5px;
  }
}

.line-num {
  display: flex;
  align-items: flex-end;
  padding-bottom: 50px;
  transform: translateX(-100px);
  opacity: 0;
  transition: 0.7s;
  span {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margin-bottom: 11px;
    margin-right: 10px;
  }
  p {
    color: #fff;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.5px;
  }
}
.container-hs-card {
  cursor: pointer;
  &:hover {
    h4 {
      color: #fff;
      transition: 0.7s;
    }
    .hold-content {
      transition: 1s;
      visibility: visible;
      overflow-y: visible;
      max-height: 300px;

      .content {
        transform: translateY(0px);
        transition: 0.7s;
        opacity: 1;
      }
    }

    .line-num {
      transform: translateX(0px);
      opacity: 1;
      transition: 0.7s;
    }
  }
}
</style>
