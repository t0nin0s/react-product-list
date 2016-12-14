import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectProduct, fetchProducts } from '../actions/productActions'
import ProductList from '../components/productList'

export const PREV = 'PREV'
export const NEXT = 'NEXT'

class ProductListContainer extends Component {
  constructor(props){
    super(props)
    this.getPage = this.getPage.bind(this)
  }

  componentWillMount() {
    this.props.fetchProducts()
  }

  getPage(page) {
    switch(page){
      case NEXT:
        this.props.fetchProducts(this.props.page + 1);
        break;
      case PREV:
        if(this.props.page > 1)
          this.props.fetchProducts(this.props.page - 1);
        break;
      default:
        break;
    }
  }

  render() {
    return ( <ProductList {...this.props} getPage={this.getPage} />  );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.list,
    page: state.products.page,
    isFetching: state.products.isFetching
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectProduct, fetchProducts}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductListContainer);
