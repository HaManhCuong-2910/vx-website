import { handleResponseApi } from '@/constant/constant'
import { instance } from '../axios'

export const getListNewsApi = async (query?: any) => {
  try {
    const res = await instance.get('/news/list', {
      params: query
    })
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}

export const getDetailNewsApi = async (id: string) => {
  try {
    const res = await instance.get(`/news/${id}/detail`)
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}
