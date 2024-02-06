import { Modal } from 'antd'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div className="p-4">
      <Outlet />
      <Modal footer={null}></Modal>
    </div>
  )
}

export default memo(Home)
