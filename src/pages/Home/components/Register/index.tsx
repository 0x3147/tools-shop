import type { IRegisterParam } from '@/service/type.ts'
import {
  fetchUserRegisterCaptcha,
  userRegisterService
} from '@/service/user.ts'
import { useAppDispatch } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { useRequest } from 'ahooks'
import { Button, Form, Input, Space, message } from 'antd'
import { FC, memo, useEffect, useState } from 'react'

const { Item } = Form
const { Password } = Input

const Register: FC = () => {
  const [timing, setTiming] = useState(false) // 控制按钮是否处于倒计时状态
  const [countdown, setCountdown] = useState(60) // 倒计时的初始值
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (countdown === 0) {
      setTiming(false)
    }
  }, [countdown])

  const startTiming = () => {
    setTiming(true)
    setCountdown(60) // 将倒计时重置为60秒

    // 每秒更新一次倒计时
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(interval) // 当倒计时结束时清除定时器
          return 0
        }
        return prevCountdown - 1 // 更新倒计时
      })
    }, 1000)
  }

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

  const { run: getCaptcha } = useRequest(
    async () => {
      startTiming()
      const address = form.getFieldValue('email')
      console.log(address)
      await fetchUserRegisterCaptcha(address)
    },
    {
      manual: true,
      onSuccess: () => {
        message.success('获取验证码成功！')
      }
    }
  )

  return (
    <Form
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
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

      <Item
        label="验证码"
        name="captcha"
        rules={[{ required: true, message: '请输入验证码!' }]}
      >
        <Space>
          <Input />
          <Button type="primary" disabled={timing} onClick={getCaptcha}>
            {timing ? `${countdown}秒后重新获取` : '获取验证码'}
          </Button>
        </Space>
      </Item>

      <Item wrapperCol={{ offset: 6, span: 16 }}>
        <button className="flex h-10 w-full cursor-pointer items-center justify-center rounded bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] text-white hover:from-[#f6d365] hover:to-[#fda085]">
          立刻注册
        </button>
      </Item>
    </Form>
  )
}

export default memo(Register)
