import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

import type { FC } from 'react'

const NotFound: FC = () => {
  const nav = useNavigate()

  const back = () => {
    nav('/home/dashboard')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="这个页面飘走了～"
      extra={
        <Button type="primary" onClick={back}>
          返回首页
        </Button>
      }
    />
  )
}

export default NotFound
