import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItem, removeItem } from '../../redux/action/cartAction'
import { processPayment } from '../../redux/action/checkoutAction';
import Banner from '../layout/Banner'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import PaymentOptions from './PaymentOptions'
import styled from 'styled-components'
import EmptyCart from './EmptyCart'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';


const Cart = ({ cart: { cartItems }, removeItem, addItem, clearItem }) => {


  return (
    <>
      <Banner dark>
        <h1>cart</h1>
      </Banner>
      <CartStyled className='container'>
        {cartItems.length === 0
          ? <EmptyCart />
          : <>
            <ShoppingBag>
              <CartHeader />
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  removeItem={removeItem}
                  clearItem={clearItem}
                />
              ))}
            </ShoppingBag>
            <PaymentOptions item={cartItems} history={useHistory} processPayment={processPayment} />
          </>
        }
      </CartStyled>
    </>
  )
}

const CartStyled = styled.div`
  margin: 2rem auto 7rem;
  @media (min-width: 768px) {
    margin: 2rem auto 8rem;
  }
`

const ShoppingBag = styled.div`
  margin-bottom: 2rem;
`

const mapStateTopProps = state => ({
  cart: state.cart
});


export default connect(mapStateTopProps, { addItem, removeItem, clearItem, processPayment })( Cart)