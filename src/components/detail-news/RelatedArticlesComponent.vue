<template>
  <div>
    <h2>BÀI VIẾT LIÊN QUAN</h2>
    <ul>
      <li>Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không?</li>
      <li>Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không?</li>
      <li>Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không?</li>
      <li>Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không?</li>
      <li>Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không?</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
