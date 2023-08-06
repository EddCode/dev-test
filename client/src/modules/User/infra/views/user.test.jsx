import { render, screen, fireEvent } from '@testing-library/react'

import { User } from './User'

import '@testing-library/jest-dom/extend-expect'
import { useUserDetails } from '@/modules/User/infra/gateway'

jest.mock('@/modules/User/infra/gateway', () => ({
  useUserDetails: jest.fn(),
  useEditUser: jest.fn().mockResolvedValue()
}))

describe('<User />', () => {
  it('Should renders "Loading" when isLoading is true', () => {
    useUserDetails.mockReturnValue({ isLoading: true })
    render(<User />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('Should renders user details when data is loaded successfully', () => {
    const mockData = {
      picture: 'profile-picture-url',
      balance: 1000,
      address: 'Sample Address',
      age: 30,
      company: 'Sample Company',
      email: 'user@example.com',
      eyeColor: 'blue',
      isActive: true,
      phone: '1234567890'
    }
    useUserDetails.mockReturnValue({ isLoading: false, data: mockData, error: null, username: 'John Doe' })
    render(<User />)
    screen.getByText('John Doe')
    screen.getByText('Balance')
    screen.getByText('1234567890')
  })

  it('Should renders "Unexpected error" when there is an error', () => {
    useUserDetails.mockReturnValue({ isLoading: false, data: null, error: new Error('Test Error'), username: 'John Doe' })
    render(<User />)
    expect(screen.getByText('Unexpected error')).toBeInTheDocument()
  })

  it('Should toggles the showBalance state when clicking on the balance element', () => {
    useUserDetails.mockReturnValue({ isLoading: false, data: { balance: 1000 }, error: null, username: 'John Doe' })
    render(<User />)
    const button = screen.getByText('Balance')
    fireEvent.click(button)
    screen.getByText('1000')

    fireEvent.click(button)
    expect(screen.queryByText('1000')).not.toBeInTheDocument()
  })

  it('Should toggles the openEditForm state when clicking on the Edit button', () => {
    useUserDetails.mockReturnValue({ isLoading: false, data: { isActive: true }, error: null, username: 'John Doe' })
    render(<User />)
    const button = screen.getByText('Edit')
    fireEvent.click(button)
    screen.getByText('Modify')

    fireEvent.click(button)
    expect(screen.queryByText('Modify')).not.toBeInTheDocument()
  })
})
