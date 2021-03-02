import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from '../type';

const INITIAL_STATE = {
  products: [],
  product: null,
  loading: true,
  error: {}
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        loading: false
      }
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        products: []
      }
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        product: null
      }
    default:
      return state;
  }
}