import PropTypes from 'prop-types'

import { StyledProfileButtonContainerDiv, StyledProfileDiv, StyledProfileFIGURE, StyledProfileIMG } from './Header.style'

const defaultUrl = 'https://i.stack.imgur.com/l60Hf.png'
export function Header ({ picture, toogleShowBalance, toogleOpenForm }) {
  return (
    <StyledProfileDiv>
      <StyledProfileFIGURE>
        <StyledProfileIMG src={picture?.startsWith('http') ? picture : defaultUrl } alt="user profile image" />
      </StyledProfileFIGURE>
      <StyledProfileButtonContainerDiv>
        <button onClick={toogleShowBalance}>Balance</button>
        <button onClick={toogleOpenForm}>Edit</button>
      </StyledProfileButtonContainerDiv>
    </StyledProfileDiv>
  )
}

Header.propTypes = {
  picture: PropTypes.string.isRequired,
  toogleShowBalance: PropTypes.func.isRequired,
  toogleOpenForm: PropTypes.func.isRequired
}
