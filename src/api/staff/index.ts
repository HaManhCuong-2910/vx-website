import { handleResponseApi } from '@/constant/constant'
import { instance } from '../axios'

export const getListStaffApi = async (query?: any) => {
  try {
    const res = await instance.get('/staff/list', {
      params: query
    })
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}
