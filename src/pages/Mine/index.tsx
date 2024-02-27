import { getUserInfoService } from '@/service/user.ts'
import { useAppSelector } from '@/store'
import { Form, Input } from 'antd'
import { memo, useEffect, useState } from 'react'

import { useRequest } from 'ahooks'
import type { FormLayout } from 'antd/es/form/Form'
import type { FC } from 'react'

const Mine: FC = () => {
  const [formLayout, setFormLayout] = useState<FormLayout>('inline')

  const { postId } = useAppSelector((state) => state.userReducer)

  const formItemLayout =
    formLayout === 'vertical'
      ? { labelCol: { span: 4 }, wrapperCol: { span: 12 } }
      : null

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        // Tailwind CSS中md断点的宽度
        setFormLayout('vertical')
      } else {
        setFormLayout('inline')
      }
    }

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize)
    // 初始化判断
    handleResize()
    // 组件卸载时移除事件监听
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fetchUserInfo = async () => {
    const result = await getUserInfoService(postId)
    console.log(result)
  }

  const { data } = useRequest(fetchUserInfo)
  console.log(data)

  return (
    <section className="flex w-full flex-col gap-y-10">
      <div className="rounded-lg bg-gradient-to-r from-pink-300 via-red-300 to-pink-500 p-5 text-3xl text-white shadow-xl">
        个人中心
      </div>
      <div className="flex flex-col rounded-lg bg-gray-100 p-5 shadow">
        <div className="flex flex-col gap-y-5">
          <div className="text-2xl text-black">账号信息</div>
          <Form
            {...formItemLayout}
            layout={formLayout}
            className="rounded-md bg-white p-5 shadow-md"
          >
            <Form.Item label="用户名" name="username" className="mb-0">
              <Input placeholder="请输入用户名" value={''} readOnly />
            </Form.Item>
            <Form.Item label="邮箱" name="email" className="mb-0">
              <Input placeholder="请输入邮箱" value={''} readOnly />
            </Form.Item>
            <Form.Item label="会员等级" name="membershipLevel" className="mb-0">
              <Input placeholder="请输入会员等级" value={''} readOnly />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row"></div>
    </section>
  )
}

export default memo(Mine)
