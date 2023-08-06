import { render, screen } from '@testing-library/react'

import { Login } from './login'

jest.mock('@/modules/Auth/infra/gateway', () => ({
  useLogin: jest.fn().mockResolvedValue()
}))

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn()
}))

test('Renders the Login component', () => {
  render(<Login />)

  screen.getByText('LOGIN')
})
