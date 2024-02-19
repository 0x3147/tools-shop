import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  isLogin: boolean
  username: string
  email: string
}

const initialState: IUserState = {
  isLogin: false,
  username: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: produce(
      (draft: IUserState, { payload }: PayloadAction<boolean>) => {
        draft.isLogin = payload
      }
    ),
    setUsername: produce(
      (draft: IUserState, { payload }: PayloadAction<string>) => {
        draft.username = payload
      }
    ),
    setEmail: produce(
      (draft: IUserState, { payload }: PayloadAction<string>) => {
        draft.email = payload
      }
    )
  }
})

export const { setIsLogin, setEmail, setUsername } = userSlice.actions
export default userSlice.reducer
