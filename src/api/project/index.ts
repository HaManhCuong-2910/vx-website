import { handleResponseApi } from '@/constant/constant'
import { instance } from '../axios'

export const getListProjectApi = async (query?: any) => {
  try {
    const res = await instance.get('/project/list', {
      params: query
    })
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}
