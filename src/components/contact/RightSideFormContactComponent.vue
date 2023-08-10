<template>
  <div>
    <div class="mt-[40px]">
      <InputCommonComponent
        :placeholder="'Tên thương hiệu của bạn:'"
        v-model:value="data.brandName"
        :error="errors?.brandName"
        @blurField="validate('brandName')"
      />
    </div>
    <div class="mt-[40px]">
      <InputCommonComponent
        :placeholder="'Email doanh nghiệp:'"
        v-model:value="data.email"
        :error="errors?.email"
        @blurField="validate('email')"
      />
    </div>
    <div class="mt-[40px]">
      <InputCommonComponent
        :placeholder="'Số điện thoại liên hệ:'"
        v-model:value="data.phoneNumber"
        :error="errors?.phoneNumber"
        @blurField="validate('phoneNumber')"
      />
    </div>
    <div class="mt-[40px]">
      <TextAreaCommonComponent
        :placeholder="'Hãy kể câu chuyện thương hiệu của bạn:'"
        v-model:value="data.storyBrand"
        :error="errors?.storyBrand"
        @blurField="validate('storyBrand')"
      />
    </div>

    <div class="mt-[92px] lg:text-end">
      <button class="btn-submit" @click="handleSubmit">gửi lời nhắn</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputCommonComponent from '@/components/common/InputCommonComponent.vue'
import TextAreaCommonComponent from '@/components/common/TextAreaCommonComponent.vue'
import { validatePhoneNumber } from '@/constant/constant'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { sendContactApi } from '@/api/mail'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const data = reactive({
  brandName: '',
  email: '',
  phoneNumber: '',
  storyBrand: ''
})

const errors = ref<any>({})

const dataSchema = yup.object().shape({
  brandName: yup.string().required('Tên thương hiệu không được bỏ trống'),
  email: yup.string().required('Email không được bỏ trống').email('Email không hợp lệ'),
  phoneNumber: yup
    .string()
    .required('Số điện thoại không được bỏ trống')
    .test('testPhone', 'Số điện thoại không đúng định dạng', (value) => {
      return validatePhoneNumber(value)
    }),
  storyBrand: yup.string().required('Giới thiệu thương hiệu không được bỏ trống')
})

const validate = (field: any) => {
  dataSchema
    .validateAt(field, data)
    .then(() => {
      errors.value[field] = ''
    })
    .catch((err) => {
      errors.value[field] = err.message
    })
}

const handleSubmit = async () => {
  dataSchema
    .validate(data, { abortEarly: false })
    .then(async () => {
      try {
        store.commit('setLoadingGlobal', true)
        const [res, err] = await sendContactApi(data)
        if (err) {
          ElMessage({
            message: 'Gửi liên hệ không thành công',
            type: 'error'
          })
          return
        }
        ElMessage({
          message: 'Gửi liên hệ thành công',
          type: 'success'
        })
        router.push({
          name: 'home'
        })
        store.commit('setLoadingGlobal', false)
      } catch (error) {
        ElMessage({
          message: error,
          type: 'error'
        })
        return
      }
    })
    .catch((err) => {
      err.inner.forEach((error: { path: any; message: string }) => {
        errors.value[error.path] = error.message
      })
    })
}
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

@media screen and (max-width: 992px) {
  ::v-deep .input-common {
    font-size: 14px;
  }
  ::v-deep .errors-custom {
    font-size: 14px;
  }
  .btn-submit {
    padding: 20px 22.727px 18.182px 22.727px;
    font-size: 17px;
    background: #3939e5;
    border: unset;
  }
}
</style>
