import React from 'react';
import ProductListContainer from '../containers/productListContainer';
import ProductDetailContainer from '../containers/productDetailContainer';

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Product List below</h1>
        <ProductListContainer />
        <h2>Product Detail</h2>
        <ProductDetailContainer />
      </div>
    );
  }
});

export default Main;
