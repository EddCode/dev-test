import { createBrowserRouter } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

import { Login } from '@/modules/Auth/infra/views'
import { User } from '@/modules/User/infra/views/user'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute element={<User />} />
  }
])
