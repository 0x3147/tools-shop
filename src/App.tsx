import router from '@/router'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsLogin } from '@/store/userReducer'
import { Skeleton, message } from 'antd'
import { Suspense, useEffect } from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'

const checkTokenValidity = () => {
  const token = localStorage.getItem('token')
  const expiresAt = localStorage.getItem('expiresAt')

  return token && Number(new Date().getTime()) < Number(expiresAt)
}

function App() {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const { isLogin } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    const isValid = checkTokenValidity()

    if (isValid && !isLogin) {
      dispatch(setIsLogin(true))
    } else if (!isValid && isLogin) {
      message.error('登录已过有效期，请重新登录！')
      nav('/home/dashboard')
      localStorage.removeItem('token')
      localStorage.removeItem('expiresAt')
      dispatch(setIsLogin(false))
    }
  }, [dispatch, isLogin])

  return (
    <Suspense fallback={<Skeleton active />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App
