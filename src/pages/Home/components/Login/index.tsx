import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Checkbox, Form, Input } from 'antd'
import { memo, useEffect } from 'react'

import type { FC, ReactNode } from 'react'

const { Item } = Form

const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'PASSWORD'

// const rememberUser = (username: string, password: string) => {
//   localStorage.setItem(USERNAME_KEY, username)
//   localStorage.setItem(PASSWORD_KEY, password)
// }
//
// const deleteUserStorage = () => {
//   localStorage.removeItem(USERNAME_KEY)
//   localStorage.removeItem(PASSWORD_KEY)
// }

const getUserStorage = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const [form] = Form.useForm()

  useEffect(() => {
    const { username, password } = getUserStorage()
    form.setFieldsValue({ username, password })
  }, [])

  const onFinish = () => {}

  return (
    <Form
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
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Item>

      <Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '密码不能为空哦' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Item>

      <Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 5, span: 16 }}
      >
        <Checkbox>记住我</Checkbox>
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
