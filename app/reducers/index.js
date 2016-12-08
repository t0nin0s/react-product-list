import { combineReducers } from 'redux';
import { products, activeProduct } from './productsReducer';

const reducers = combineReducers({
  products,
  activeProduct
});

export default reducers;
