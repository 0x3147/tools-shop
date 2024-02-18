import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

interface IHomeState {
  isLoginModalVisible: boolean
  isUserDetailModalVisible: boolean
  isUserLogin: boolean
  username: string
}

const initialState: IHomeState = {
  isLoginModalVisible: false,
  isUserDetailModalVisible: false,
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
    ),
    setIsUserDetailModalVisible: produce(
      (draft: IHomeState, { payload }: PayloadAction<boolean>) => {
        draft.isUserDetailModalVisible = payload
      }
    )
  }
})

export const {
  setIsLoginModalVisible,
  setIsUserLogin,
  setUsername,
  setIsUserDetailModalVisible
} = counterSlice.actions
export default counterSlice.reducer
