import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import homeReducer from './homeReducer'

import type { TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

// 获取state类型
type GetStateFnType = typeof store.getState
// 获取state返回值类型
type IRootState = ReturnType<GetStateFnType>
// 获取dispatch类型
type DisPatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DisPatchType = useDispatch

export default store
