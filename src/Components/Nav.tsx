import {useLocation} from 'react-router-dom'
import {StyledNav, StyledLink} from './Nav-styled'
import {StyledNavWrapper} from './Nav-styled'

const Nav = (): React.ReactElement => {
  const location = useLocation()

  return (
    <StyledNavWrapper>
      <StyledNav className='navbar'>
        <StyledLink $isSelected={location.pathname === '/'} to='/'>
          Home
        </StyledLink>
        <StyledLink
          $isSelected={location.pathname === '/hooker-management'}
          to='/hooker-management'
        >
          Hooker Management
        </StyledLink>
        <StyledLink $isSelected={location.pathname === '/rnd'} to='/rnd'>
          R&D
        </StyledLink>
      </StyledNav>
    </StyledNavWrapper>
  )
}

export default Nav
