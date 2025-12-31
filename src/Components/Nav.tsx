import {useLocation} from 'react-router-dom'
import {StyledNav, StyledLink} from '../styles/layout/Nav-styled'
import {StyledNavWrapper} from '../styles/layout/Nav-styled'

const Nav = () => {
  const pathname = useLocation().pathname

  return (
    <StyledNavWrapper>
      <StyledNav>
        <StyledLink $isSelected={pathname === '/'} to='/'>
          Home
        </StyledLink>
        <StyledLink
          $isSelected={pathname === '/hooker-management'}
          to='/hooker-management'
        >
          Hooker Management
        </StyledLink>
        <StyledLink $isSelected={pathname === '/rnd'} to='/rnd'>
          R&D
        </StyledLink>
      </StyledNav>
    </StyledNavWrapper>
  )
}

export default Nav
