import { memo } from 'react'
import {Button} from 'antd'

import type { FC } from 'react'

const UserInfo: FC = () => {
  return (
    <main className="flex flex-col">
      <div>UserInfo</div>
      <div>UserInfo</div>
      <div className="flex justify-center items-center w-full h-10">
        <Button className="w-1/2" type="primary" danger>退出登录</Button>
      </div>
    </main>
  )
}

export default memo(UserInfo)
