import { RouterProvider } from 'react-router-dom'

import { routes } from './routes'

export function Routing () {
  return (
    <RouterProvider router={routes} />
  )
}
