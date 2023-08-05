import { StyledForm } from './Form.styled'

export function Form () {
  return (
    <StyledForm>
      <div>
        <label htmlFor="username">Username</label>
        <input type="email" name="username"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <button>LOGIN</button>
    </StyledForm>
  )
}
