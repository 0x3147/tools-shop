import { memo } from 'react'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AllTools: FC<IProps> = () => {
  return (
    <div>
      <div>AllTools</div>
    </div>
  )
}

export default memo(AllTools)
