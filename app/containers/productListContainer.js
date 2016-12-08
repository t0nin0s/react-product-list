import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getProductInfo } from '../actions/index';
import { selectProduct, fetchProducts } from '../actions/productActions'

class ProductListContainer extends Component {

  componentWillMount() {
    this.props.fetchProducts()
  }

  createListItems() {
    return this.props.products.map((product) => {
      return (
        <div className="item"
          key={product.id}
          onClick={() => this.props.selectProduct(product) }
        >
          <span> {product.title} </span>
          <img src={product.thumbnailUrl} />
        </div> );
    });
  }

  render() {
    return (
      <div className="ProductListContainer">
        {this.props.isFetching &&
          <h4>Loading products...</h4>
        }

        {!this.props.isFetching &&
          this.createListItems() }
      </div>
    );
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
