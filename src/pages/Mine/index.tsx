import { getUserInfoService } from '@/service/user.ts'
import { useAppSelector } from '@/store'
import { memo, useEffect } from 'react'

import type { FC } from 'react'

const Mine: FC = () => {
  const { postId } = useAppSelector((state) => state.userReducer)
  const fetchUserInfo = async () => {
    const result = await getUserInfoService(postId)
    console.log(result)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <section className="flex w-full flex-col gap-y-10">
      <div className="text-3xl text-black">个人中心</div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-5">
          <div className="text-2xl text-black">账号信息</div>
          <div className="flex flex-col justify-between md:flex-row">
            <div>用户名</div>
            <div>邮箱</div>
            <div>会员等级</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row"></div>
    </section>
  )
}

export default memo(Mine)
