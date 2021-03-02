import axios from 'axios'
import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEWS, REVIEW_ERROR, UPDATE_LIKES, UPDATE_REVIEW, UPDATE_UNLIKES } from '../type';
import { getProduct } from './productAction';

// GET ALL REVIEWS
export const getReviews = (productId) => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/products/${productId}/reviews`);
    dispatch({ type: GET_REVIEWS, payload: res.data });

  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
}

// WRITE REVIEW
export const addReview = (productId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`/api/v1/products/${productId}/reviews`, formData, config);
    dispatch({ type: ADD_REVIEW, payload: res.data });
    dispatch(getProduct(productId));

  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
}

// DELETE REVIEW
export const deleteReview = (productId, reviewId) => async dispatch => {
  try {
    await axios.delete(`/api/v1/products/${productId}/reviews/${reviewId}`);
    dispatch({ type: DELETE_REVIEW, payload: reviewId });
    dispatch(getReviews(productId));
    dispatch(getProduct(productId));

  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
}

// UPDATE REVIEW
export const updateReview = (productId, reviewId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(`/api/v1/products/${productId}/reviews/${reviewId}`, formData, config);
    dispatch({ type: UPDATE_REVIEW, payload: res.data });

  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
}

// ADD LIKES
export const addLike = (productId, reviewId) => async dispatch => {
  try {
    const res = await axios.put(`/api/v1/products/${productId}/reviews/likes/${reviewId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { reviewId, likes: res.data }
    });

  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
}

// REMOVE LIKES
export const toggleUnlike = (productId, reviewId) => async dispatch => {
  try {
    const res = await axios.put(`/api/v1/products/${productId}/reviews/unlikes/${reviewId}`);
    dispatch({
      type: UPDATE_UNLIKES,
      payload: { reviewId, unlikes: res.data }
    });

  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
}