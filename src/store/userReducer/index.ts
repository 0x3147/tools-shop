import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  username: string
  email: string
  isLogin: boolean
  postId: number | bigint
}

const initialState: IUserState = {
  username: '',
  email: '',
  isLogin: false,
  postId: 0
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
    ),
    setPostId: produce(
      (draft: IUserState, { payload }: PayloadAction<number | bigint>) => {
        draft.postId = payload
      }
    )
  }
})

export const { setEmail, setUsername, setIsLogin, setPostId } =
  userSlice.actions
export default userSlice.reducer
