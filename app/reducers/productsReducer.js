import {
  REQUEST_PRODUCTS, RECEIVE_PRODUCTS,
  ERROR_PRODUCTS, SELECT_PRODUCT, PRODUCTS_LOADING
} from '../actions/productActions'

export function products(state = { isFetching: false, list: [] }, action){
  switch (action.type) {
    case PRODUCTS_LOADING:
      return Object.assign({}, state, {
        isFetching: action.isLoading
      })

    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: action.isLoading,
        list: action.products,
        lastUpdated: action.receivedAt
      })

    case ERROR_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: action.isLoading,
        error: action.error
      })

    default:
      return state;
  }
}

export function activeProduct(state=null, action){
  switch (action.type) {
    case SELECT_PRODUCT:
      return Object.assign({}, state, {
        product: action.product
      })

      default:
        return state;      
  }
}
