import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../layout/Button'
import Banner from '../layout/Banner'
import Alert from '../layout/Alert'

const LoginRegister = ({ children, title, desc }) => {
  return (
    <>
      <Banner dark>
        <h1>Just Enjoy It</h1>
      </Banner>
      <Alert />
      <LoginRegisterStyled className='container'>
        <ActiveColumn>
          {children}
        </ActiveColumn>
        <InactiveColumn>
          <h2>{title}</h2>
          <p>{desc}</p>
          <Link to={`/my-account/${title}`}>
            <Button type='button' dark>{title}</Button>
          </Link>
        </InactiveColumn>
      </LoginRegisterStyled>
    </>
  )
}



const LoginRegisterStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 auto 7rem;
  h2 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  } 
  @media (min-width: 768px) {
    margin: 2rem auto 8rem;
  }
`

const ActiveColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
 
  .icon {
    vertical-align: middle;
  }
  @media (min-width: 768px) {
    border-right: 1px solid rgba(0,0,0,0.1);
    padding: 2.5rem 3rem;
  }
`

const InactiveColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2.5rem 0;
  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
  }
`

export default LoginRegister