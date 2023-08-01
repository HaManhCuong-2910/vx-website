<template>
  <div>
    <h1 class="font-family-helvetica">TIN TỨC</h1>
    <div class="list-item">
      <ul>
        <li>ALL</li>
        <li>CASE STUDY</li>
        <li>Business</li>
        <li>trending</li>
        <li>marketing</li>
        <li>philosophy</li>
        <li>graphic design</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h1 {
  color: #fff;
  text-align: center;
  font-size: 300px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -6px;
}
.list-item {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  padding-top: 31px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  overflow-x: scroll;
  ul {
    width: 100%;
    display: flex;
    gap: 30px;
    li {
      padding: 20px 25px;
      border-radius: 100px;
      border: 1px solid #fff;
      color: #fff;
      font-family: SVN-Helvetica Now;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1px;
      text-transform: uppercase;
      white-space: nowrap;
    }
  }
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 80px;
    letter-spacing: -1.927px;
    padding-bottom: 40px;
  }
  .list-item {
    ul {
      gap: 10px;
      li {
        padding: 10.314px 12.892px;
        font-size: 10.314px;
        letter-spacing: 0.516px;
      }
    }
  }
}
</style>
