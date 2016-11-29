import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productActive from './productActiveReducer';

const reducers = combineReducers({
  products: productReducer,
  productActive: productActiveReducer
});

export default reducers;
