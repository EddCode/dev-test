import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

import { StyledForm } from './Form.styled'

import { useEditUser } from '@/modules/User/infra/gateway'

export function EditUser ({ updateUserData, isActive }) {
  const [payload, setPayload] = useState({})
  const [wasSubmitted, setWasSubmitted] = useState(false)

  const $form = useRef(null)

  useEditUser(payload, updateUserData, wasSubmitted)

  const handleSubmit = (e) => {
    e.preventDefault()
    setWasSubmitted(true)
    const formData = new FormData($form.current)
    const payload = Object.fromEntries(formData)

    Object.entries(payload).forEach(([key, value]) => {
      (!isNaN(value)) && (payload[key] = Number(value));
      (value === '') && delete payload[key]
    })

    payload.isActive = $form.current[0].checked

    setPayload(payload)
  }

  return (
    <StyledForm ref={$form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="isActive">Active?</label>
        <input type="checkbox" name="isActive" defaultChecked={isActive}/>
      </div>
      <div>
        <label htmlFor="picture">Picture URL</label>
        <input type="text" name="picture"/>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" />
      </div>
      <div>
        <label htmlFor="eyeColor">Eye color</label>
        <input type="text" name="eyeColor" />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input type="text" name="phone" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="Address" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
      </div>
      <button type="submit">Modify</button>
    </StyledForm>
  )
}

EditUser.propTypes = {
  updateUserData: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}
