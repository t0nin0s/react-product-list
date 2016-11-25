import React from 'react';
import ProductListContainer from '../containers/productListContainer'

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Product List below</h1>
        <ProductListContainer />
      </div>
    );
  }
});

export default Main;
