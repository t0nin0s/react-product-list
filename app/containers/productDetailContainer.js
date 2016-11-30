import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetailContainer extends Component {

  render() {
    if(!this.props.productActive){
      return (<h2> No product selected yet! </h2>);
    }
    else {
      return (
        <div>
          <span> {this.props.productActive.name} </span>
          <span> {this.props.productActive.description} </span>
          <span> {this.props.productActive.price} </span>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return{
    productActive: state.productActive
  };
}

export default connect(mapStateToProps)(ProductDetailContainer);
