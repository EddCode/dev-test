import { createBrowserRouter } from 'react-router-dom'

import { Login } from '../modules/Auth/infra/views'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  }
])
