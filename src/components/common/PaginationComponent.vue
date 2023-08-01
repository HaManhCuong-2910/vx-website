<template>
  <div class="pagination-block">
    <el-pagination class="pagination-block-el" layout="prev, pager, next" :total="50" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
::v-deep .pagination-block-el {
  button {
    background-color: transparent;
    color: #fff;
    width: 14.206px;
    height: 28px;
    i {
      font-size: 24px !important;
    }

    &.is-first {
      padding-right: 20px;
    }
    &.is-last {
      padding-left: 20px;
    }
  }

  ul {
    column-gap: 20px;
    li {
      background: transparent;
      font-size: 24px;
      font-family: SVN-TT Hoves;
      min-width: 50px;
      min-height: 50px;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;

      &.is-active {
        background-color: #3939e5;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  ::v-deep .pagination-block-el {
    button {
      width: 34.206px;
    }
    ul {
      column-gap: 20px;
      li {
        min-width: 40.868px;
        min-height: 40.868px;
        font-size: 19.617px;
        letter-spacing: 0.981px;
      }
    }
  }
}
</style>
