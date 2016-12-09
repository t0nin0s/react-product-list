import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectProduct, fetchProducts } from '../actions/productActions'

import ProductList from '../components/productList'

class ProductListContainer extends Component {

  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    return ( <ProductList {...this.props}/> );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.list,
    isFetching: state.products.isFetching
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectProduct, fetchProducts}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductListContainer);
