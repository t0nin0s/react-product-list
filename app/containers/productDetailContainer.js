import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../components/productDetail';

class ProductDetailContainer extends Component {

  render() {
    return (
      <ProductDetail {...this.props} />
    )
  }
}

function mapStateToProps(state){
  return{
    productActive: state.productActive,
  };
}

export default connect(mapStateToProps)(ProductDetailContainer);
