import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import homeReducer from './homeReducer'
import userReducer from './userReducer'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import type { TypedUseSelectorHook } from 'react-redux'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer']
}

const reducer = combineReducers({
  homeReducer,
  userReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)

// 获取state类型
type GetStateFnType = typeof store.getState
// 获取state返回值类型
type IRootState = ReturnType<GetStateFnType>
// 获取dispatch类型
type DisPatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DisPatchType = useDispatch
