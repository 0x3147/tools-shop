import type {
  ILoginData,
  ILoginParam,
  IRegisterParam,
  IRes
} from '@/service/type.ts'
import axios from './index'

const userRegisterService = async (param: IRegisterParam) => {
  const url = '/user/register'

  return await axios.post(url, param)
}

const fetchUserRegisterCaptcha = async (email: string) => {
  const url = `/user/register-captcha`

  return await axios.get(url, {
    params: {
      address: email
    }
  })
}

const userLoginService = async (
  param: ILoginParam
): Promise<IRes<ILoginData>> => {
  const url = '/user/login'

  return await axios.post(url, param)
}

export {
  fetchUserRegisterCaptcha,
  refreshToken,
  userLoginService,
  userRegisterService
}
