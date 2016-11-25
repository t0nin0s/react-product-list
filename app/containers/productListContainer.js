import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductInfo } from '../actions/index';

class ProductListContainer extends Component {

  createListItems() {
    return this.props.products.map((product) => {
      return (
        <li
          key={product.id}
          onClick={() => this.props.getProductInfo(product) }
        >
          {product.name} price: {product.price}
        </li> );
    });
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({getProductInfo: getProductInfo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductListContainer);
