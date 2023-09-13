<template>
  <div class="lg:mb-[75px] mb-[44px]">
    <h2>{{ props.data.short_description }}</h2>
  </div>
  <div v-html="props.data.description"></div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  data: Object as PropType<any>
})
</script>

<style scoped lang="scss">
::v-deep p {
  color: rgba(0, 0, 0, 0.86);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
}
::v-deep ul {
  color: #000000db;
  list-style: disc;
  padding: revert;
}
::v-deep h1 {
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep h2 {
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep h3 {
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep h4 {
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep h5 {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep h6 {
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
::v-deep img {
  width: 100%;
  object-fit: cover;
}
::v-deep .ql-align-center {
  text-align: center;
}

@media screen and (max-width: 992px) {
  ::v-deep p {
    font-size: 14px;
    line-height: 20px; /* 142.857% */
  }

  ::v-deep h2 {
    font-size: 24px;
    line-height: 33px; /* 137.5% */
  }

  ::v-deep h1 {
    font-size: 28px;
    line-height: 33px; /* 137.5% */
  }

  ::v-deep h3 {
    font-size: 20px;
    line-height: 33px; /* 137.5% */
  }

  ::v-deep h4 {
    font-size: 18px;
    line-height: 33px; /* 137.5% */
  }
  ::v-deep h5 {
    font-size: 16px;
    line-height: 33px; /* 137.5% */
  }
  ::v-deep h6 {
    font-size: 14px;
    line-height: 33px; /* 137.5% */
  }
}
</style>
