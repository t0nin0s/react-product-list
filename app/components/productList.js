import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

class ProductList extends Component {

  createListItems() {
    return this.props.products.map((product, index) => {
      if (index % 4 === 0)<Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src={product.thumbnailUrl} />
        </Col>
      if (index % 4 === 0)<Row>
      )
    });
  }

  render() {
    return (
      <div className="ProductList">
        {this.props.isFetching &&
          <h4>Loading products...</h4>
        }

        {!this.props.isFetching &&
          <Grid>
            <Row>
              {this.createListItems()}
            </Row>
          </Grid>
        }
      </div>
    );
  }
}

export default ProductList;
