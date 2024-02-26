import Register from '@/pages/Home/components/Register'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { Modal, Tabs } from 'antd'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Login from './components/Login'

import type { FC } from 'react'

const Home: FC = () => {
  const { isLoginModalVisible } = useAppSelector((state) => state.homeReducer)

  const dispatch = useAppDispatch()

  const handleCancelLoginModal = () => {
    dispatch(setIsLoginModalVisible(!isLoginModalVisible))
  }

  return (
    <main className="h-full w-full bg-[#fefefe] p-4 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Outlet />
      <Modal
        open={isLoginModalVisible}
        footer={null}
        onCancel={handleCancelLoginModal}
        maskClosable={false}
        destroyOnClose={true}
      >
        <Tabs
          defaultActiveKey="1"
          centered
          items={[
            {
              key: 'login',
              label: '登录',
              children: <Login />
            },
            {
              key: 'register',
              label: '注册',
              children: <Register />
            }
          ]}
        />
      </Modal>
    </main>
  )
}

export default memo(Home)
