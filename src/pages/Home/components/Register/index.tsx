import { memo } from 'react'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Register: FC<IProps> = () => {
  return (
    <div>
      <div>Register</div>
    </div>
  )
}

export default memo(Register)
