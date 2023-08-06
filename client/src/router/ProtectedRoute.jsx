import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute ({ element }) {
  const token = localStorage.getItem('token')

  if (token && Element) {
    return element
  }

  return <Navigate to="/login" />
}

ProtectedRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func])
}
