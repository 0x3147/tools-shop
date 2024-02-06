import router from '@/router'
import { Skeleton } from 'antd'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <Suspense fallback={<Skeleton active />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App
