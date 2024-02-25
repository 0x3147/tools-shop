import { useAppDispatch } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { setIsLogin, setUsername } from '@/store/userReducer'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { Form, Input, message } from 'antd'
import { memo } from 'react'

import type { ILoginParam } from '@/service/type.ts'
import { userLoginService } from '@/service/user.ts'
import type { FC, ReactNode } from 'react'

const { Item } = Form

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  const [form] = Form.useForm()

  const { run } = useRequest(
    async (values: ILoginParam) => {
      return await userLoginService(values)
    },
    {
      manual: true,
      onSuccess: (result) => {
        console.log(result)
        const {
          userInfo: { username },
          token
        } = result

        const expiresAt = new Date().getTime() + 7 * 24 * 60 * 60 * 1000

        message.success('登录成功！')
        localStorage.setItem('token', token)
        localStorage.setItem('expiresAt', String(expiresAt))
        dispatch(setUsername(username))
        dispatch(setIsLogin(true))
        dispatch(setIsLoginModalVisible(false))
      }
    }
  )

  const onFinish = (values: any) => {
    run(values)
  }

  return (
    <Form
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '用户名不能为空哦' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
      </Item>

      <Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '密码不能为空哦' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="请输入密码"
        />
      </Item>

      <Item wrapperCol={{ offset: 5, span: 16 }}>
        <button className="flex h-10 w-full cursor-pointer items-center justify-center rounded bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] text-white hover:from-[#f6d365] hover:to-[#fda085]">
          登录
        </button>
      </Item>
    </Form>
  )
}

export default memo(Login)
