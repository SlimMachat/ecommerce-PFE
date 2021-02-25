import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import emptyCart from '../../assets/shopping-cart.png'
import Button from '../layout/Button'

const EmptyCart = () => {
  return (
    <EmptyCartStyled>
      <div className='img-container'>
        <img src={emptyCart} alt='empty shopping cart' />
      </div>
      <h2>Your cart is currently empty.</h2>
      <p></p>
      <Link to='/shop'><Button dark>return to shop</Button></Link>
    </EmptyCartStyled>
  )
}

const EmptyCartStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  .img-container{
    width: 10rem;
    margin-bottom: 2rem;
  }
  h2{
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 2.3rem;
  }
  p{
    margin: 1rem 0 2rem;
    width: 70%;
    color: var(--text-clr);
  }
  button {
    background-color: var(--primary-clr);
  }
`

export default EmptyCart