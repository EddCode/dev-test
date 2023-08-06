import PropTypes from 'prop-types'

import { StyledNavBarDiv } from './NavBar.style'

export function NavBar ({ name }) {
  return (
    <StyledNavBarDiv>
        <p>{name}</p>
    </StyledNavBarDiv>
  )
}

NavBar.propTypes = {
  name: PropTypes.string.isRequired
}
