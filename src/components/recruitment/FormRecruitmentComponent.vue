<template>
  <div>
    <div class="mt-[40px]">
      <InputCommonComponent
        :placeholder="'Họ và tên:'"
        v-model:value="data.fullName"
        :error="errors?.fullName"
        @blurField="validate('fullName')"
      />
    </div>
    <div class="mt-[40px]">
      <InputCommonComponent
        :placeholder="'Email:'"
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
      <InputCommonComponent
        :placeholder="'Chức vụ mà bạn quan tâm:'"
        :disabled="true"
        v-model:value="data.position"
        :error="errors?.position"
      >
        <template #prefix>
          <DropdownOptionComponent
            :listData="dropdownListOption"
            :activeTitle="data.position"
            @handleChange="handleChangeActive"
          />
        </template>
      </InputCommonComponent>
    </div>
    <div class="mt-[40px]">
      <TextAreaCommonComponent
        :placeholder="'Giới thiệu đôi điều về bạn:'"
        v-model:value="data.storySel"
        @blurField="validate('storySel')"
        :error="errors?.storySel"
      />
    </div>
    <div class="mt-[40px]">
      <InputCommonComponent
        :placeholder="'Đính kèm file Portfolio:'"
        :disabled="true"
        v-model:value="data.attachmentFile"
        :error="errors?.attachmentFile"
      >
        <template #prefix>
          <FileRecruitmentComponentVue
            :nameFile="data.attachmentFile?.name"
            @handleChangeFile="handleChangeFile($event)"
          />
        </template>
      </InputCommonComponent>
    </div>
    <div class="mt-[92px] lg:text-end">
      <button class="btn-submit" @click="handleSubmit">gửi lời nhắn</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputCommonComponent from '@/components/common/InputCommonComponent.vue'
import TextAreaCommonComponent from '@/components/common/TextAreaCommonComponent.vue'
import DropdownOptionComponent from './DropdownOptionComponent.vue'
import { onMounted, reactive, ref, watch } from 'vue'
import { dataDropdownOption, validatePhoneNumber } from '@/constant/constant'
import FileRecruitmentComponentVue from './FileRecruitmentComponent.vue'
import * as yup from 'yup'
import { ElLoading, ElMessage } from 'element-plus'
import { sendRecruitmentApi } from '@/api/mail'
import { useRouter } from 'vue-router'
const listData = ref<any[]>(dataDropdownOption)
const dropdownListOption = ref<any[]>([])
const router = useRouter()
const data = reactive({
  fullName: '',
  email: '',
  phoneNumber: '',
  position: '',
  storySel: '',
  attachmentFile: null
})

const errors = ref<any>({})

const dataSchema = yup.object().shape({
  fullName: yup.string().required('Họ và tên không được bỏ trống'),
  email: yup.string().required('Email không được bỏ trống').email('Email không hợp lệ'),
  phoneNumber: yup
    .string()
    .required('Số điện thoại không được bỏ trống')
    .test('testPhone', 'Số điện thoại không đúng định dạng', (value) => {
      return validatePhoneNumber(value)
    }),
  position: yup.string().test('testPosition', 'Vui lòng chọn chức vụ', (value) => {
    return value !== 'Chức vụ mà bạn quan tâm'
  }),
  storySel: yup.string().required('Giới thiệu bản thân không được bỏ trống'),
  attachmentFile: yup.string().required('File đính kèm không được bỏ trống')
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

const handleChangeFile = (event) => {
  delete errors.value['attachmentFile']
  data.attachmentFile = event
}

watch(
  () => listData.value,
  () => {
    if (listData.value?.length > 0) {
      data.position = listData.value.find((item) => item.active)?.title
      dropdownListOption.value = listData.value.filter((item) => !item.active)
    }
  },
  {
    deep: true
  }
)

const handleChangeActive = (item) => {
  delete errors.value['position']
  listData.value = listData.value.map((item) => {
    return {
      title: item.title,
      active: false
    }
  })
  const findIndexTitle = listData.value.findIndex((itemFind) => item.title === itemFind.title)
  listData.value[findIndexTitle].active = true
}

const handleSubmit = async () => {
  dataSchema
    .validate(data, { abortEarly: false })
    .then(async () => {
      try {
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        const formData = new FormData()
        formData.append('fullName', data.fullName)
        formData.append('email', data.email)
        formData.append('phoneNumber', data.phoneNumber)
        formData.append('position', data.position)
        formData.append('introduction', data.storySel)
        formData.append('fileCV', data.attachmentFile)

        const [res, err] = await sendRecruitmentApi(formData)
        if (err) {
          ElMessage({
            message: 'Gửi lời nhắn không thành công',
            type: 'error'
          })
          return
        }
        ElMessage({
          message: 'Gửi lời nhắn thành công',
          type: 'success'
        })

        loading.close()
        router.push({
          name: 'home'
        })
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

onMounted(() => {
  listData.value = listData.value.map((item) => {
    return {
      title: item,
      active: false
    }
  })

  listData.value[0].active = true
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
