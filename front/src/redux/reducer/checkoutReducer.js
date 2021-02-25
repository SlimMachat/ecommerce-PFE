import { STRIPE_CHECKOUT } from "../type";

const INITIAL_STATE = {
  payment: null,
  loading: true
}

export const checkoutReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case STRIPE_CHECKOUT:
      return {
        ...state,
        payment: payload,
        loading: false
      }
    default:
      return state
  }
}