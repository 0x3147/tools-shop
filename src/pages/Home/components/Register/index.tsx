import { userRegisterService } from '@/service/user.ts'
import { useAppDispatch } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { useRequest } from 'ahooks'
import { Form, Input, message } from 'antd'
import { memo } from 'react'

import type { IRegisterParam } from '@/service/user.ts'
import type { FC } from 'react'

const { Item } = Form
const { Password } = Input

const Register: FC = () => {
  const dispatch = useAppDispatch()

  const { run } = useRequest(
    async (values: IRegisterParam) => {
      await userRegisterService(values)
    },
    {
      manual: true,
      onSuccess: () => {
        message.success('注册成功！')
        dispatch(setIsLoginModalVisible(false))
      }
    }
  )

  const onFinish = (values: any) => {
    run(values)
  }

  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
      <Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '输入的邮箱格式不合法'
          },
          {
            required: true,
            message: '请输入您的邮箱~'
          }
        ]}
      >
        <Input />
      </Item>

      <Item
        label="用户名"
        name="username"
        rules={[
          { required: true, message: '用户名不能为空哦' },
          {
            type: 'string',
            min: 5,
            max: 20,
            message: '用户名长度在5~20之间'
          },
          {
            pattern: /^[a-zA-Z0-9_]+$/,
            message: '用户名只能由字母、数字、下划线组成'
          }
        ]}
      >
        <Input />
      </Item>

      <Item
        label="密码"
        name="password"
        rules={[
          { required: true, message: '密码不能为空哦' },
          {
            pattern:
              /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,._])[0-9a-zA-Z!@#$%^&*,\\._]{8,12}$/,
            message: '密码必须包含大小写字母,特殊字符和数字，且长度不低于8位'
          }
        ]}
      >
        <Password />
      </Item>

      <Item
        label="确认密码"
        name="confirm"
        dependencies={['password']}
        rules={[
          { required: true, message: '请确认您输入的密码' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('两次输入的密码不一致'))
            }
          })
        ]}
      >
        <Password />
      </Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <button className="flex h-10 w-full cursor-pointer items-center justify-center rounded bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] text-white hover:from-[#f6d365] hover:to-[#fda085]">
          立刻注册
        </button>
      </Form.Item>
    </Form>
  )
}

export default memo(Register)
