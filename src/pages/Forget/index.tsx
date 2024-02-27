import { memo } from 'react'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Forget: FC<IProps> = () => {
  return (
    <div>
      <div>Forget</div>
    </div>
  )
}

export default memo(Forget)
