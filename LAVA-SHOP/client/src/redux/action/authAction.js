import axios from 'axios';
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED
} from '../type';
import { setAuthToken } from '../utils/setAuthToken';
import { showAlert } from './alertAction';

// LOAD USER
export const loadUser = () => async dispatch => {
  // 1) SET TOKEN IN THE HEADER
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  // 2) GET REQUEST TO API
  try {
    const res = await axios.get('/api/v1/users');
    dispatch({ type: USER_LOADED, payload: res.data });
    localStorage.setItem("iduser",res.data._id)

  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
}

// REGISTER USER
export const registerUser = ({ name, email, password, password2 }) => async dispatch => {
  // 1) TRANSFORM FORM DATA
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, email, password, password2 });

  try {
    // 2) SEND POST REQUEST
    const res = await axios.post('/api/v1/users/signup', body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());

  } catch (err) {
    // 3) DISPATCH ALERT
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(err => dispatch(showAlert(err.msg, 'danger')));
    }
    dispatch({ type: REGISTER_FAIL });
  }
}

export const login = ({ email, password }) => async dispatch => {
  // 1) TRANSFORM DATA
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    // 2) SEND POST REQUEST
    const res = await axios.post('/api/v1/users/login', body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());

  } catch (err) {
    // 3) DISPATCH ALERT
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(showAlert(error.msg, 'danger')));
    }
    dispatch({ type: LOGIN_FAIL });
  }
}

export const logout = () => async dispatch => {
  dispatch({ type: LOGOUT });
  dispatch(showAlert('You are now logged out', 'danger'));
}