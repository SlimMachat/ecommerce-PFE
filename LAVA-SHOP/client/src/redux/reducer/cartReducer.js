import {
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
  TOGGLE_SIDECART
} from "../type";
import { addItemToCart, removeItemFromCart } from "../utils/cartFunctions";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDECART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      }
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
      }
    default:
      return state;
  }
}