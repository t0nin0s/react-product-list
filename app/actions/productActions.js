export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const ERROR_PRODUCTS = 'ERROR_PRODUCTS'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const PRODUCTS_LOADING = 'PRODUCTS_LOADING'

export function selectProduct(product){
  return {
    type: SELECT_PRODUCT,
    product
  };
}

function productsIsLoading(bool) {
  return {
    type: PRODUCTS_LOADING,
    isLoading: bool
  }
}

function receiveProducts(products, page){
  console.log()
  return {
    type: RECEIVE_PRODUCTS,
    isLoading: false,
    products,
    page,
    receivedAt: Date.now()
  }
}

function errorProducts(bool){
  return {
    type: ERROR_PRODUCTS,
    isLoading: false,
    hasFailed: bool
  }
}

/*
export function fetchProductsIfNeeded(){
  return (dispatch, getState){})
}
*/

export function fetchProducts(page = 1){
  console.log(`fetch page ${page}`)
  return (dispatch) => {
    dispatch(productsIsLoading(true));
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`)
        .then(response => response.json())
        .then(json =>
          dispatch(receiveProducts(json, page))
        )
        .catch(error =>
          dispatch(errorProducts(error))
        )
    }, 2000
    )
  }
}
