import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.4em 1em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: background-color 0.25s;

  button:hover {
    background-color: #b96900;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
