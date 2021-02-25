import React from 'react'
import styled from 'styled-components'

const Banner = ({ dark, children }) => {
  return (
    <BannerStyled dark={dark}>
      {children}
    </BannerStyled>
  )
}

const BannerStyled = styled.section`
  background-color: ${props => props.dark ? 'var(--dark-clr)' : '#F9F9F9'};
  padding: 1rem 2rem;
  color: ${props => props.dark ? '(--light-clr)' : 'var(--dark-clr)'};
  h1 {
    color: var(--light-clr);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export default Banner