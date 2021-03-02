import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { alertReducer } from './alertReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';
import { productReducer } from './productReducer';
import { reviewReducer } from './reviewReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  product: productReducer,
  cart: cartReducer,
  review: reviewReducer,
  pay: checkoutReducer
});

export default persistReducer(persistConfig, rootReducer);