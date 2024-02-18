import axios from './index'

export interface IRegisterParam {
  username: string
  email: string
  password: string
}

export const userRegisterService = async (param: IRegisterParam) => {
  const url = '/user/register'

  return await axios.post(url, param)
}
