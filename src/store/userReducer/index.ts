import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  username: string
  email: string
}

const initialState: IUserState = {
  username: '',
  email: ''
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
    )
  }
})

export const { setEmail, setUsername } = userSlice.actions
export default userSlice.reducer
