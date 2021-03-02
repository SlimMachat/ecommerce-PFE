import axios from 'axios';
import { STRIPE_CHECKOUT } from '../type';

export const processPayment = (id, stripePromise) => async dispatch => {
  try {
    const stripe = await stripePromise;
    const res = await axios(`/api/v1/purchases/checkout-session/${id}`);

    await stripe.redirectToCheckout({
      sessionId: res.data.session.id
    });

    dispatch({ type: STRIPE_CHECKOUT, payload: res.data });

  } catch (err) {
    console.log(err);
  }
}