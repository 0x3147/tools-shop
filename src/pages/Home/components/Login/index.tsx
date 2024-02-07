import { memo } from 'react'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return (
    <div>
      <div>Login</div>
    </div>
  )
}

export default memo(Login)
