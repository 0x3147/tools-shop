export interface IRes<T> {
  errorCode: number
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
  userInfo: {
    postId: number | bigint

    username: string

    email: string

    isAdmin: boolean

    createTime: Date
  }

  token: string
}
