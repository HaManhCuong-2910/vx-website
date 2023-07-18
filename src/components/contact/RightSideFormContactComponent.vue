<template>
  <div>
    <div class="lg:mt-[40px]">
      <InputCommonComponent
        :placeholder="'Tên thương hiệu của bạn:'"
        v-model:value="data.brandName"
      />
    </div>
    <div class="lg:mt-[40px]">
      <InputCommonComponent :placeholder="'Email doanh nghiệp:'" v-model:value="data.email" />
    </div>
    <div class="lg:mt-[40px]">
      <InputCommonComponent
        :placeholder="'Số điện thoại liên hệ:'"
        v-model:value="data.phoneNumber"
      />
    </div>
    <div class="lg:mt-[40px]">
      <TextAreaCommonComponent
        :placeholder="'Hãy kể câu chuyện thương hiệu của bạn:'"
        v-model:value="data.storyBrand"
      />
    </div>

    <div class="lg:mt-[92px] text-end"><button class="btn-submit">gửi lời nhắn</button></div>
  </div>
</template>

<script setup lang="ts">
import InputCommonComponent from '@/components/common/InputCommonComponent.vue'
import TextAreaCommonComponent from '@/components/common/TextAreaCommonComponent.vue'
import { reactive } from 'vue'

const data = reactive({
  brandName: '',
  email: '',
  phoneNumber: '',
  storyBrand: ''
})
</script>

<style scoped lang="scss">
.btn-submit {
  padding: 22px 25px 20px 25px;
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
}
</style>
