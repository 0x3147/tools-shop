import Register from '@/pages/Home/components/Register'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  setIsLoginModalVisible,
  setIsUserDetailModalVisible
} from '@/store/homeReducer'
import { Modal, Tabs } from 'antd'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Login from './components/Login'
import UserInfo from './components/UserInfo'

import type { FC } from 'react'

const Home: FC = () => {
  const { isLoginModalVisible, isUserDetailModalVisible } = useAppSelector(
    (state) => state.homeReducer
  )

  const dispatch = useAppDispatch()

  const handleCancelLoginModal = () => {
    dispatch(setIsLoginModalVisible(!isLoginModalVisible))
  }

  const handleCancelUserDetailModal = () => {
    dispatch(setIsUserDetailModalVisible(!isUserDetailModalVisible))
  }

  const handleDetailModalOpen = (open: boolean) => {
    if (open) {
      console.log('执行请求')
    }
  }

  return (
    <main className="h-full w-full bg-[#fefefe] p-4">
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
      <Modal
        title="用户信息"
        width={720}
        open={isUserDetailModalVisible}
        footer={null}
        onCancel={handleCancelUserDetailModal}
        maskClosable={false}
        afterOpenChange={handleDetailModalOpen}
      >
        <UserInfo />
      </Modal>
    </main>
  )
}

export default memo(Home)
