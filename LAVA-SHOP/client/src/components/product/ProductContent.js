import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { UniqueColor } from './UniqueColor'
import { addItem, toggleSideCart } from '../../redux/action/cartAction'
import { UniqueSize } from './UniqueSize'
import StarRatings from 'react-star-ratings'
import Button from '../layout/Button'
import styled from 'styled-components'

const ProductContent = ({ product, addItem, toggleSideCart }) => {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [activeIndexColor, setActiveIndexColor] = useState(null);
  const [activeIndexSize, setActiveIndexSize] = useState(null);
  const [warning, setWarning] = useState('')

  return (
    <ContentStyled>
      {/* PRODUCT NAME */}
      <h1>{product.name}</h1>
      {/* PRODUCT PRICE */}
      <p className='price'>{product.price.toFixed(2)} Dt</p>
      {/* RATING STARS */}
      <div className='ratings'>
        <span className='stars'>
          <StarRatings
            rating={product.ratingsAverage}
            starDimension='17px'
            starSpacing='0px'
            starRatedColor='#FDCC0D'
          />
        </span>
        <span>({product.ratingsQuantity} customer reviews)</span>
      </div>


      {/* AVAILABLE COLORS */}
      <div className='colors'>
        <span style={{color:"black"}}>Color : {color}</span>
        <span className='color-div'>
          <UniqueColor
            stock={product.stock}
            setColor={setColor}
            setActiveIndex={setActiveIndexColor}
            activeIndex={activeIndexColor}
          />
        </span>
      </div>
      {/* AVAILABLE SIZES */}
      <div className='colors'>
        <span style={{color:"black"}}>SIZE : {size} </span>
        <span style={{color:"black"}} className='color-div'>
          <UniqueSize
            stock={product.stock}
            setSize={setSize}
            setActiveIndex={setActiveIndexSize}
            activeIndex={activeIndexSize}
          />
        </span>
      </div>
      {/* QUANTITY SELECTOR */}
      <div className='quantity-btn'>
        {(!color || !size) && <span className='warning'>{warning}</span>}

        <div className='quantity'>
          <div className='quantity-selector'>
            <button
              className='minus'
              onClick={() => qty === 1 ? 'null' : setQty(qty - 1)}
            >
              <FiMinus className='icon' />
            </button>
            <input
              type='text'
              className='amount'
              value={qty}
              onChange={() => setQty(qty)}
            />
            <button
              className='plus'
              onClick={() => setQty(qty + 1)}
            >
              <FiPlus className='icon' />
            </button>
          </div>

          {color && size
            ? <div className='add-to-cart' onClick={() => {
              toggleSideCart();
              addItem(product, qty, color, size);
              setWarning('');
            }}>
              <Button dark type='button'>Add to cart</Button>
            </div>
            : <div className='add-to-cart' onClick={() => setWarning('Please select options before adding to bag')}>
              <Button dark type='button'>Add to cart</Button>
            </div>
          }

        </div>
      </div>
      {/* OPTIONS */}
      <div className='product-options'>
        
        <div className='single-option'>
          <strong>Category:</strong>
          <span>{product.category}</span>
        </div>
      
      </div>
    </ContentStyled>
  )
}

const ContentStyled = styled.div`
  h1{
    font-family: var(--product-ff);
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 400;
    line-height: 1;
  };
  .ratings{
    margin: 0.7rem 0;
    .stars {
      margin-right: 1rem;
    }
    .star-container {
      margin-top: 2px;
    }
  }
  .price {
    color: var(--primary-clr);
    font-size: 2rem;
    line-height: 1;
    margin-top: 0.5rem;
  }
  .summary {
    margin: 1rem 0;
  }
  .colors {
    text-transform: uppercase;
    margin: 10px 0;
    color : white
  }
  .color-div{
    display: flex;
  }
  .quantity-btn{
    margin: 2rem 0;
  }
  .warning {
    color: var(--red-clr);
  }
  .quantity {
    display: flex;
  }
  .quantity-selector{
    display: flex;
    align-items: center;
    button, input {
      border: none;
      border: 1px solid rgba(136,136,136,.12);
      height: 43px;
    }
    input {
      width: 40px;
      text-align: center;
    }
    button {
      padding: 0 10px;
      cursor: pointer;
      .icon{
        vertical-align: middle;
      }
    }
    button:hover {
      background-color: var(--faint-grey)
    }
  }
  .add-to-cart {
    margin-left: 1.5rem;
  }
  .product-options {
    border-top: 1px solid rgba(136,136,136,.12);
    padding-top: 1.5rem;
    .single-option {
      margin-bottom: 1rem;
    }
    .icon {
      vertical-align: middle;
      margin-bottom: 3px;
    }
    span{
      text-transform: capitalize;
      margin-left: 10px;
    }
    .single-option{
      color:white
    }
  }
`

export default connect(null, { addItem, toggleSideCart })(ProductContent)