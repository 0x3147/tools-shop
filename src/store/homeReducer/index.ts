import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

interface IHomeState {
  isLoginModalVisible: boolean
  isUserLogin: boolean
  username: string
}

const initialState: IHomeState = {
  isLoginModalVisible: false,
  isUserLogin: false,
  username: ''
}

export const counterSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsLoginModalVisible: produce(
      (draft: IHomeState, { payload }: PayloadAction<boolean>) => {
        draft.isLoginModalVisible = payload
      }
    ),
    setIsUserLogin: produce(
      (draft: IHomeState, { payload }: PayloadAction<boolean>) => {
        draft.isUserLogin = payload
      }
    ),
    setUsername: produce(
      (draft: IHomeState, { payload }: PayloadAction<string>) => {
        draft.username = payload
      }
    )
  }
})

export const { setIsLoginModalVisible, setIsUserLogin, setUsername } =
  counterSlice.actions
export default counterSlice.reducer
