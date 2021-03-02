import { v4 as uuidv4 } from 'uuid';
import { REMOVE_ALERT, SHOW_ALERT } from '../type';

export const showAlert = (msg, alertType, timeout = 4000) => async dispatch => {
  const id = uuidv4();
  dispatch({ type: SHOW_ALERT, payload: { msg, alertType, id } });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}