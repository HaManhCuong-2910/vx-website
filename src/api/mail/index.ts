import { handleResponseApi } from '@/constant/constant'
import { instance } from '../axios'

export const sendRecruitmentApi = async (body: any) => {
  try {
    const res = await instance.post('/mail/send-mail-apply', body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}

export const sendContactApi = async (body: any) => {
  try {
    const res = await instance.post('/mail/send-mail-contact', body)
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}
