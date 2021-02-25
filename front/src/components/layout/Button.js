import React from 'react'
import styled from 'styled-components'

const Button = ({ children, type, dark, flex, disabled }) =>
  <ButtonStyled
    type={type}
    dark={dark}
    flex={flex}
    disabled={disabled}
  >
    {children}
  </ButtonStyled>

const ButtonStyled = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.dark ? 'var(--dark-clr)' : 'var(--light-clr)'};
  color: ${props => props.dark ? 'var(--light-clr)' : 'var(--dark-clr)'};
  padding: 0.9rem 1.4rem;
  border: ${props => props.dark ? 'none' : '2px solid var(--dark-clr)'};
  cursor: pointer;
  letter-spacing: 1px;
  width: ${props => props.flex ? '100%' : 'auto'};
  transition: all 0.2s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'auto'};
  :hover {
    background-color: #222;
    border: ${props => props.dark ? 'none' : '2px solid #222'};
    color: var(--light-clr);
  };
`

export default Button