import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import styled from 'styled-components'

const CartItem = ({ item, removeItem, addItem, clearItem }) => {

  return (
    <CartItemStyled>
      <div className='product'>
        <div className='img-container'>
          <img src={item.imageCover} alt={item.name} />
        </div>
        <div className='product-desc'>
          <span>{item.name}</span>
          <span>Color: {item.color}</span>
          <span>Size: {item.size}</span>
        </div>
      </div>
      <div className='product-options'>
        <div className='price'>
          <label>Each</label>
        {item.price.toFixed(2)}
        </div>
        <div className='quantity-selector'>
          <button
            className='minus'
            onClick={() => removeItem(item, item.quantity)}
          >
            <FiMinus className='icon' />
          </button>
          <span className='amount'>
            {item.quantity}
          </span>
          <button
            className='plus'
            onClick={() => addItem(item, item.quantity, item.color, item.size)}
          >
            <FiPlus className='icon' />
          </button>
        </div>

        <div className='total'>
          <label>Total</label>
          {(item.quantity * item.price).toFixed(2)}
        </div>
        <div className='remove icon' onClick={() => clearItem(item)}>
          <IoIosClose />
        </div>
      </div>
    </CartItemStyled >
  )
}

const CartItemStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: var(--input-border);
  padding: 15px 0;
  .product{
    width: 42%;
    display: flex;
    .product-desc {
      display: flex;
      flex-direction: column;
    }
  }
  .img-container{
    width: 17%;
    padding-right: 10px;
  }
  .product-options{
    width:57.5%;
    display: flex;
    justify-content: space-between;
  }
  .price,.quantity-selector,.total{
    width: 27.7%;
    text-align: center;
  }
  label{
    display: none;
  }
  .remove {
    width: 14%;
    text-align: center;
  }
  .quantity-selector{
    display: flex;
    justify-content:center;
    button, .amount {
      border: none;
      border: 1px solid rgba(136,136,136,.12);
      height: 43px;
    }
    .amount {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      padding: 0 10px;
      cursor: pointer;
      .icon{
        vertical-align: middle;
        font-size: 0.8rem;
      }
    }
    button:hover {
      background-color: var(--faint-grey)
    }
  }
  .icon {
    font-size: 1.5rem;
    margin-top: -3px;
  }
  @media(max-width:576px){
    flex-direction: column;
    position: relative;
    margin-top: 1rem;
    .product {
      width: 100%;
      justify-content: flex-start;
       margin-bottom: 1rem;
    }
    .img-container{
      width: 25%;
    }
    .product-options {
      width: 100%;
      justify-content: center;
      .remove {
        position: absolute;
        top: 0;
        right: -1rem;
      }
    }
    label{
      display: block;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .price, .total{
      width: 33%;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    .quantity-selector {
      width: 33%;
    }
  }
`

export default CartItem