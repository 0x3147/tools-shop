import { lazy } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import type { Router } from '@remix-run/router/dist/router'

const Layout = lazy(() => import('@/Layout'))
const Home = lazy(() => import('@/pages/Home'))

const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
] as RouteObject[])

export default router
