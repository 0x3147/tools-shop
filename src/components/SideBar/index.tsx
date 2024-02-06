import { memo, useState } from 'react'

import type { FC } from 'react'

const SideBar: FC = () => {
  const [selected, setSelected] = useState<string>('home')

  const handleButtonClick = (key: string) => {
    setSelected(key) // 更新选中的按钮
  }

  const renderButton = (key: string, label: string) => {
    const isSelected = selected === key
    const bgColor = isSelected ? 'bg-[#ecf6ff]' : 'hover:bg-[#ecf6ff]'
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
    <div className="hidden h-screen w-64 flex-col border-r border-gray-200 bg-white p-2 text-black md:flex">
      {/* Logo区域 */}
      <div className="flex h-16 items-center justify-center">
        <div className="text-xl font-semibold">LOGO</div>
      </div>
      {/* 按钮区域 */}
      <div className="flex-1 px-2 py-4">
        {/* 按钮列表 */}
        <ul className="space-y-2">
          {renderButton('home', '首页')}
          {renderButton('allTools', '所有工具')}
          {renderButton('chat', '聊天')}
          {/* 更多按钮 */}
        </ul>
      </div>
      {/* 登录按钮区域 */}
      <div className="mb-8 flex h-16 items-center justify-center">
        <div className="flex h-10 w-full cursor-pointer items-center justify-center rounded bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-pink-500 hover:to-orange-500">
          登录获取完整体验
        </div>
      </div>
    </div>
  )
}

export default memo(SideBar)
