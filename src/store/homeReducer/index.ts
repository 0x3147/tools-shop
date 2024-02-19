import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

interface IHomeState {
  isLoginModalVisible: boolean
  isUserDetailModalVisible: boolean
}

const initialState: IHomeState = {
  isLoginModalVisible: false,
  isUserDetailModalVisible: false
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
    setIsUserDetailModalVisible: produce(
      (draft: IHomeState, { payload }: PayloadAction<boolean>) => {
        draft.isUserDetailModalVisible = payload
      }
    )
  }
})

export const { setIsLoginModalVisible, setIsUserDetailModalVisible } =
  counterSlice.actions
export default counterSlice.reducer
