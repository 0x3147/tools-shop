import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  username: string
  email: string
  isLogin: boolean
}

const initialState: IUserState = {
  username: '',
  email: '',
  isLogin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: produce(
      (draft: IUserState, { payload }: PayloadAction<string>) => {
        draft.username = payload
      }
    ),
    setEmail: produce(
      (draft: IUserState, { payload }: PayloadAction<string>) => {
        draft.email = payload
      }
    ),
    setIsLogin: produce(
      (draft: IUserState, { payload }: PayloadAction<boolean>) => {
        draft.isLogin = payload
      }
    )
  }
})

export const { setEmail, setUsername, setIsLogin } = userSlice.actions
export default userSlice.reducer
