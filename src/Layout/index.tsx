import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

import type { FC } from 'react'

const Layout: FC = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default memo(Layout)
