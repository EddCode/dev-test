import { Form, HeaderLogo } from './components'
import { StyledFormContainerDiv } from './login.styled'

export function Login () {
  return (
    <StyledFormContainerDiv>
      <HeaderLogo />
      <Form />
    </StyledFormContainerDiv>
  )
}
