import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getProductInfo } from '../actions/index';
import { selectProduct, fetchProducts, requestsProducts } from '../actions/productActions'

class ProductListContainer extends Component {

  componentWillMount() {
    //console.log("component Will Mount, lets fetch the Products")
    this.props.fetchProducts()
  }

  createListItems() {
    return this.props.products.map((product) => {
      return (
        <li
          key={product.id}
          onClick={() => this.props.selectProduct(product) }
        >
          {product.name} price: {product.price}
        </li> );
    });
  }

  render() {
    return (
      <div> { this.props.isFetching } </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    isFetching: state.isFetching
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchProducts,requestsProducts}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductListContainer);
