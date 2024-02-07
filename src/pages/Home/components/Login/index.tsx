import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

const { Item } = Form

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      name="normal_login"
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

      <Item wrapperCol={{ offset: 6, span: 16 }}>
        <Checkbox>记住我</Checkbox>
      </Item>

      <Item wrapperCol={{ offset: 6, span: 16 }}>
        <Space direction="vertical">
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
          <Link to={''}>还没有账号？点击这里去注册一个吧！</Link>
        </Space>
      </Item>
    </Form>
  )
}

export default memo(Login)
