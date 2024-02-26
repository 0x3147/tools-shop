import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import type { PayloadAction } from '@reduxjs/toolkit'

interface IHomeState {
  isLoginModalVisible: boolean
}

const initialState: IHomeState = {
  isLoginModalVisible: false
}

export const counterSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsLoginModalVisible: produce(
      (draft: IHomeState, { payload }: PayloadAction<boolean>) => {
        draft.isLoginModalVisible = payload
      }
    )
  }
})

export const { setIsLoginModalVisible } = counterSlice.actions
export default counterSlice.reducer
