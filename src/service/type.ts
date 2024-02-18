export interface IRes {
  status: number
  success: boolean
  data?: IResData
  message: string
}

export interface IResData {
  [key: string]: any
}
