import React, { Component } from 'react'

export default class ProductDetail extends Component {

  render(){
      return (
        <div>
          <div className="my-col-xs-12"> <h2>Product Detail</h2> </div>
          {!this.props.productActive &&
            <div className="my-col-xs-12">
              <h2> No product selected yet! </h2>
              <p>You were asking for product with Id: {this.props.params.productId} </p>
            </div>
          }
          {this.props.productActive &&
            <div className="my-col-xs-12">
              <span> {this.props.productActive.name} </span>
              <span> {this.props.productActive.description} </span>
              <span> {this.props.productActive.price} </span>
            </div>
          }
        </div>
      )
  }
}
