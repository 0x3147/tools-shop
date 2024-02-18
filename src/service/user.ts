import axios from './index'

export interface IRegisterParam {
  username: string
  email: string
  password: string
}

export interface ILoginParam {
  username: string
  password: string
}

const userRegisterService = async (param: IRegisterParam) => {
  const url = '/user/register'

  return await axios.post(url, param)
}

const userLoginService = async (param: ILoginParam) => {
  const url = '/user/login'

  return await axios.post(url, param)
}

export { userLoginService, userRegisterService }
