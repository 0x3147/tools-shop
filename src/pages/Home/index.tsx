import { useAppDispatch, useAppSelector } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { Modal, Tabs } from 'antd'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

import type { FC } from 'react'

const Home: FC = () => {
  const { isLoginModalVisible } = useAppSelector((state) => state.home)

  const dispatch = useAppDispatch()

  const handleCancel = () => {
    dispatch(setIsLoginModalVisible(!isLoginModalVisible))
  }

  return (
    <div className="h-full w-full bg-[#fefefe] p-4">
      <Outlet />
      <Modal open={isLoginModalVisible} footer={null} onCancel={handleCancel}>
        <Tabs
          defaultActiveKey="1"
          centered
          items={[
            {
              key: 'login',
              label: '登录',
              children: '登录'
            },
            {
              key: 'register',
              label: '注册',
              children: '注册'
            }
          ]}
        />
      </Modal>
    </div>
  )
}

export default memo(Home)
