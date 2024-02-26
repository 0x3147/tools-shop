import { memo } from 'react'

import type { FC } from 'react'

const Mine: FC = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="text-3xl text-black">个人中心</div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="text-2xl text-black">账号信息</div>
          <div className="flex flex-col justify-between md:flex-row">
            <div>用户名</div>
            <div>邮箱</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row"></div>
    </section>
  )
}

export default memo(Mine)
