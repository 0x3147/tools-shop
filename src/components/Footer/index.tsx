import { Space } from 'antd'
import { memo } from 'react'

import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white p-4 text-center text-[#999999]">
      <Space size="large">
        <div className="cursor-pointer">关于我们</div>
        <div className="cursor-pointer">域名备案占位</div>
        <div className="cursor-pointer">网站备案号占位</div>
      </Space>
    </footer>
  )
}

export default memo(Footer)
