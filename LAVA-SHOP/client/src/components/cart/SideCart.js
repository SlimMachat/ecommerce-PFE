import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { clearItem, toggleSideCart } from '../../redux/action/cartAction'
import { Link } from 'react-router-dom'
import emptyCart from '../../assets/shopping-cart.png'


const SideCart = ({ cart, close, clearItem, toggleSideCart, auth: { isAuthenticated } }) => {
  let subtotalCalc = null;
  cart.cartItems.map(calc => {
    const subtotal = calc.price * calc.quantity;
    return subtotalCalc += subtotal;
  });

  return (
    <CartOverlay onClick={close}>
      <CartStyled onClick={e => e.stopPropagation()}>
        <Header>
          <h2>shopping cart</h2>
          <span onClick={close}>close<IoIosClose className='icon' /></span>
        </Header>
        <Main>
          <ul>
            {cart.cartItems.length > 0
              ? cart.cartItems.map(item => (
                <li key={item.id}>
                  <div className='img-container'>
                    <img src={item.imageCover} alt={item.name} />
                  </div>
                  <div className='content'>
                    <p className='name'>{item.name} - {item.color} - {item.size}</p>
                    <p className='qty'>{item.quantity} x <span className='price'>{item.price} </span></p>
                    <span className='close-btn' onClick={() => clearItem(item)}><IoIosClose className='icon' /></span>
                  </div>
                </li>
              ))
              : <div className='empty'>
                <img src={emptyCart} alt='empty cart' /> No products in the cart.
                </div>
            }
          </ul>
        </Main>
        {cart.cartItems.length > 0 &&
          <Footer>
            <div className='subtotal'>
              <p>subtotal:</p>
              <p className='price'>{subtotalCalc} Dt</p>
            </div>
            <div className='buttons'>
            {!isAuthenticated
                  ? <Link  to='/my-account/login' onClick={() => toggleSideCart()}><button style={{backgroundColor: "black"}}  className='checkout-btn'>view card</button></Link>
                  : <Link to='/cart' onClick={() => toggleSideCart()}><button style={{backgroundColor: "black"}} className='checkout-btn'>view card </button></Link>
                }
            <div>
                {!isAuthenticated
                  ? <Link to='/my-account/login' onClick={() => toggleSideCart()}><button  style={{backgroundColor: "pink" ,color: "black"}} className='checkout-btn'>Log in to checkout</button></Link>
                  : <Link to='/cart' onClick={() => toggleSideCart()}><button  style={{backgroundColor: "pink" ,color: "black"}} className='checkout-btn'>checkout</button></Link>
                }
              </div>

            </div>
          </Footer>
        }
      </CartStyled>
    </CartOverlay>
  )
}

const CartOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.8);
  left: 0;
  top: 0;
  z-index: 100;
`

const CartStyled = styled.aside`
  position: absolute;
  max-width: 330px;
  width: 100%;
  height: 100%;
  top:0;
  right: 0;
  bottom: 0;
  background: var(--light-clr);
  z-index: 101;
  overflow: auto;
`

const Header = styled.div`
  background-color: var(--dark-clr);
  color: var(--light-clr);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  text-transform: uppercase;
  h2{
    color: var(--light-clr);  
    letter-spacing: 1.5px;
  }
  span{
    font-size: 0.9rem;
    cursor: pointer;
    .icon {
      font-size: 1.1rem;
      vertical-align: middle;
      margin-bottom: 3px;
    }
  }
`

const Main = styled.div`
  ul {
    margin: 1rem;
  }
  li{
    display: flex;
    /* border-top: 1px solid rgba(136,136,136,.12); */
    padding-top: 10px;
    .img-container{
      width: 20%;
      margin-right: 1rem;
    }
    .content {
      max-width: 20rem;
      width: 75%;
      font-size: 0.9rem;
      text-transform: uppercase;
      position: relative;
      .close-btn{
        position: absolute;
        top: -4px; 
        right: 0;
        font-size: 1.5rem;
        color: var(--text-clr);
      }
      .name {
        width: 85%;
      }
      .qty{
        margin: 0.5rem 0;
      }
      .price{
        color: var(--primary-clr);
      }
    }
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    img{
      width: 3rem;
      margin-right: 1rem;
    }
  }
`

const Footer = styled.div`
  margin: 2rem 1rem;
  .subtotal {
    font-size: 1.3rem;
    font-weight: bold;
    padding: 5px;
    border-top: 1px solid rgba(136,136,136,.12);
    border-bottom: 1px solid rgba(136,136,136,.12);
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    .price {
      color: white;
    }
  }
  .buttons{
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    button {
      width: 100%;
      border: none;
      padding: 1rem;
      margin: 0.3rem 0;
      text-transform: uppercase;
      font-family: var(--primary-ff);
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .checkout-btn {
      background-color: var(--primary-clr);
      color: var(--light-clr);
    }
    button:hover {
      background-color: #3e3e3e;
      color: var(--light-clr);
    }
    .checkout-btn:hover {
      background-color: #71c1c2;
    }
  }
`

const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth
});


export default connect(mapStateToProps, { clearItem, toggleSideCart })(SideCart)