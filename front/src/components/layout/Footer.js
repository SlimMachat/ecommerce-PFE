import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled className="copy">

      <p  style={{marginLeft:"650px" , color : 'white'}}>©CreatedBy Fares.Jasser.Slim</p>

      </FooterStyled>
      
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  padding: 1rem;
  margin-bottom : 0px;
  .logo {
    font-size: 2.5rem;
    font-weight: bold;
  }
  a{
    color: var(--primary-clr);
  }
  
  @media(max-width: 768px) {
    .logo{
      font-size: 2rem;
    }
  }
  @media(max-width: 768px) {
    .logo{
      font-size: 1.4rem;
    }
    margin-bottom: 4rem;
  }
`

export default Footer
