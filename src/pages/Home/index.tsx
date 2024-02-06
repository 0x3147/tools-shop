import { memo } from 'react'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div>
      <div>Home</div>
    </div>
  )
}

export default memo(Home)
