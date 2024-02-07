import { useAppDispatch, useAppSelector } from '@/store'
import { setIsLoginModalVisible } from '@/store/homeReducer'
import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { FC } from 'react'

const SideBar: FC = () => {
  const { isLoginModalVisible } = useAppSelector((state) => state.home)

  const dispatch = useAppDispatch()

  const nav = useNavigate()

  const [selected, setSelected] = useState<string>('/home/dashboard')

  const handleButtonClick = (key: string) => {
    setSelected(key)
    nav(key)
  }

  const handleLoginClick = () => {
    dispatch(setIsLoginModalVisible(!isLoginModalVisible))
  }

  const renderButton = (key: string, label: string) => {
    const isSelected = selected === key
    const bgColor = isSelected ? 'bg-[#E6F4FF]' : 'hover:bg-[#E6F4FF]'
    const textColor = isSelected ? 'text-[#43a5ff]' : 'text-black'
    return (
      <li
        key={key}
        className={`${bgColor} ${textColor} w-full cursor-pointer rounded-lg p-2`}
        onClick={() => handleButtonClick(key)}
      >
        {label}
      </li>
    )
  }

  return (
    <section className="hidden h-screen w-64 flex-col border-r border-gray-200 bg-[#f5f5f5] p-2 text-black md:flex">
      {/* Logo区域 */}
      <div className="flex h-16 items-center justify-center">
        <div className="text-xl font-semibold">LOGO</div>
      </div>
      {/* 按钮区域 */}
      <div className="flex-1 px-2 py-4">
        {/* 按钮列表 */}
        <ul className="space-y-6">
          {renderButton('/home/dashboard', '首页')}
          {renderButton('/home/allTools', '所有工具')}
          {renderButton('/home/chat', 'AI聊天')}
          {/* 更多按钮 */}
        </ul>
      </div>
      {/* 登录按钮区域 */}
      <div className="mb-8 flex h-16 items-center justify-center">
        <div
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-pink-500 hover:to-orange-500"
          onClick={handleLoginClick}
        >
          登录获取完整体验
        </div>
      </div>
    </section>
  )
}

export default memo(SideBar)
