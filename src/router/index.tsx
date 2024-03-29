import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import type { Router } from '@remix-run/router/dist/router'

const Layout = lazy(() => import('@/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const AllTools = lazy(() => import('@/pages/AllTools'))
const Chat = lazy(() => import('@/pages/Chat'))

const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Navigate to="/home/dashboard" />
          },
          {
            path: '/home/dashboard',
            element: <Dashboard />
          },
          {
            path: '/home/allTools',
            element: <AllTools />
          },
          {
            path: '/home/chat',
            element: <Chat />
          }
        ]
      }
    ]
  }
])

export default router
