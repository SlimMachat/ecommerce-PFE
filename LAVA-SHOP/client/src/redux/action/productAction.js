import axios from 'axios'
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from '../type';

// GET ALL PRODUCTS
export const getProducts = (category) => async dispatch => {
  try {
    const query = category !== null ? `?category=${category}` : ''
    const res = await axios.get(`/api/v1/products${query}`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });

  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}

// GET ONE PRODUCT
export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/products/${id}`);
    console.log(res)

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })

  } catch (err) {
    console.log(err)

    dispatch({

      type: GET_PRODUCT_FAIL,
      payload: {
        msg: err.response.statusText,
      //  status: err.response.status
      }
    });
  }
}