import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

import { StyledForm } from './Form.styled'

import { useLogin } from '@/modules/Auth/infra/gateway'
import { saveToken, saveUser } from '@/modules/Auth/infra/storage'

export function Form () {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState({ message: null })
  const [payload, setPayload] = useState({ username: '', password: '' })

  const $form = useRef(null)

  const { refetch } = useLogin(payload.username, payload.password)
  const navigate = useNavigate()

  useEffect(() => {
    formSubmitted && fetchData()
  }, [formSubmitted])

  const fetchData = async () => {
    try {
      const { data: { login: { token, name, uuid } } } = await refetch()
      saveToken(token)
      saveUser({ name, uuid })
      navigate('/dashboard')
    } catch (err) {
      setError({ message: err.message })
    }

    setFormSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData($form.current)
    const payload = Object.fromEntries(formData)
    setPayload(payload)
    setFormSubmitted(true)
  }
  return (
    <StyledForm ref={$form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="email" name="username"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      {error.message && <p>{error.message}</p>}
      <button type="submit">LOGIN</button>
    </StyledForm>
  )
}
