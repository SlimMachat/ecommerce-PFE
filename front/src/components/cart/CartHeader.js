import React from 'react'
import styled from 'styled-components'

const CartHeader = () => {
  return (
    <CartHeaderStyled>
      <div className='header-block'>
        <span>product</span>
      </div>
      <div className='header-block'>
        <span>price</span>
      </div>
      <div className='header-block'>
        <span>quantity</span>
      </div>
      <div className='header-block'>
        <span>subtotal</span>
      </div>
      <div className='header-block'>
        <span></span>
      </div>
    </CartHeaderStyled>
  )
}

const CartHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: var(--input-border);
  padding: 10px 0;
  .header-block {
    text-transform: uppercase;
    width: 16%;
    text-align: center;
    &:first-child {
      width: 42%;
      text-align: left;
    }
    &:last-child {
      width: 8%;
    }
  }
  @media(max-width: 576px) {
    display: none;
  }
`

export default CartHeader
