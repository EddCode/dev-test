import PropTypes from 'prop-types'

import { StyledProfileButtonContainerDiv, StyledProfileDiv, StyledProfileFIGURE, StyledProfileIMG } from './Header.style'

export function Header ({ picture, toogleShowBalance }) {
  return (
    <StyledProfileDiv>
      <StyledProfileFIGURE>
        <StyledProfileIMG src={picture} alt="user profile image" />
      </StyledProfileFIGURE>
      <StyledProfileButtonContainerDiv>
        <button onClick={toogleShowBalance}>Balance</button>
        <button>Edit</button>
      </StyledProfileButtonContainerDiv>
    </StyledProfileDiv>
  )
}

Header.propTypes = {
  picture: PropTypes.string.isRequired,
  toogleShowBalance: PropTypes.func.isRequired
}
