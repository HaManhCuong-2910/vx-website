import axios from 'axios'

const cancelToken = axios.CancelToken

export const cancelSource = cancelToken.source()

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_END_POINT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const setAuthorization = (h: string): void => {
  instance.defaults.headers.common.Authorization = h
}
