import axios from './index'

export interface IRegisterParam {
  username: string
  email: string
  password: string
  captcha: string
}

export interface ILoginParam {
  username: string
  password: string
}

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

const userLoginService = async (param: ILoginParam) => {
  const url = '/user/login'

  return await axios.post(url, param)
}

export { fetchUserRegisterCaptcha, userLoginService, userRegisterService }
