import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Image, Pager } from 'react-bootstrap'
import { Link } from 'react-router'
import { PREV, NEXT } from '../containers/productListContainer'

class ProductList extends Component {

  createListItems() {
    return this.props.products.map((product, index) => {
      return (
        <div className="my-col-xs-6 my-col-sm-3 my-col-md-2">
          <Link to={`/products/${product.id}`}  key={product.id} activeStyle={{ color: 'red' }} >
            <Image href="#" src={product.thumbnailUrl} key={product.id} />
          </Link>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="ProductList">
        {!this.props.children &&
          <div className="my-col-xs-12"> <h1>Products List</h1> </div>
        }
        {this.props.params.productId && this.props.children}
        {!this.props.children && this.props.isFetching &&
          <div className="my-col-xs-12"> <h4>Loading products...</h4> </div>
        }

        {!this.props.children && !this.props.isFetching &&
          <Grid>
            <Row>
              {this.createListItems()}
            </Row>
            <Pager>
              <Pager.Item previous href="#" onClick={() => this.props.getPage(PREV)}>&larr; Previous Page</Pager.Item>
              <Pager.Item next href="#" onClick={() => this.props.getPage(NEXT)}>Next Page &rarr;</Pager.Item>
            </Pager>
          </Grid>
        }
      </div>
    );
  }
}

export default ProductList;
