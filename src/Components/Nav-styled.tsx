import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledNavWrapper = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: #1a1a1a;
  padding: 10px 0;
`

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const StyledLink = styled(Link)<{$isSelected?: boolean}>`
  color: ${props => (props.$isSelected ? '#f7a71e' : '#fbc9ff')};
  background-color: #50027d;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    color: #f7a71e;
  }
`
