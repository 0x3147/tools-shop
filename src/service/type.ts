export interface IRes<T> {
  statusCode: number
  success: boolean
  data?: T
  message: string
}

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

export interface ILoginData {
  postId: number | bigint

  username: string

  email: string

  isAdmin: boolean

  createTime: Date

  member: boolean

  access_token: string

  refresh_token: string
}
