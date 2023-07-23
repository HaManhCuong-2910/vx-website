import { instance } from './axios'
import type { AxiosError } from 'axios'

export const setupInterceptors = () => {
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      const { status, data } = response

      if (status === 200 || status === 201) {
        return response
      }

      return Promise.reject(response)
    },
    async (error: any) => {
      return Promise.reject(error.response?.data)
    }
  )
}
