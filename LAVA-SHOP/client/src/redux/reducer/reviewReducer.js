import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEWS, REVIEW_ERROR, UPDATE_LIKES, UPDATE_REVIEW, UPDATE_UNLIKES } from "../type";

const INITIAL_STATE = {
  reviews: [],
  loading: true,
  review: null,
  errors: {},
  user: {}
};

export const reviewReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false
      }
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        loading: false
      }
    case UPDATE_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        loading: false
      }
    case DELETE_REVIEW:
      return {
        ...state,
        reveiws: state.reviews.filter(review => review.id !== payload)
      }
    case UPDATE_LIKES:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review.id === payload.reviewId
            ? { ...review, likes: payload.likes }
            : review),
        loading: false
      }
    case UPDATE_UNLIKES:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review.id === payload.reviewId
            ? { ...review, unlikes: payload.unlikes }
            : review),
        loading: false
      }
    case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}