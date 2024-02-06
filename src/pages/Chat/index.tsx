import { memo } from 'react'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Chat: FC<IProps> = () => {
  return (
    <div>
      <div>Chat</div>
    </div>
  )
}

export default memo(Chat)
