import { message as msg } from 'antd'
import axios, { type AxiosResponse } from 'axios'
import type { IRes } from './typs.ts'

const instance = axios.create({
  timeout: 10 * 1000
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(async (res: AxiosResponse) => {
  const resData: IRes = res.data || {}
  const { message, data, success } = resData
  if (!success) {
    await msg.error(message)
    throw new Error(message)
  }
  return data as any
})
