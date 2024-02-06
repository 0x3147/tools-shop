import { useAppDispatch, useAppSelector } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { Modal } from 'antd'
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
    <div className="p-4">
      <Outlet />
      <Modal open={isLoginModalVisible} footer={null} onCancel={handleCancel}>
        登陆弹窗
      </Modal>
    </div>
  )
}

export default memo(Home)
