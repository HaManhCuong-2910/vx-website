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

export const getListFilter = async () => {
  try {
    const res = await instance.get('/news/list-filter')
    return [handleResponseApi(res), null]
  } catch (err: any) {
    return [null, err]
  }
}

export const getRandomListNews = async (size: number = 4) => {
  try {
    const res = await instance.get('/news/random-list', {
      params: {
        size
      }
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
