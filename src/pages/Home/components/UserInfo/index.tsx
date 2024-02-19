import { Button } from 'antd'
import { memo } from 'react'

import type { FC } from 'react'

const UserInfo: FC = () => {
  return (
    <main className="flex flex-col">
      <div>UserInfo</div>
      <div>UserInfo</div>
      <div className="flex h-10 w-full items-center justify-center">
        <Button className="w-1/2" type="primary" danger>
          退出登录
        </Button>
      </div>
    </main>
  )
}

export default memo(UserInfo)
