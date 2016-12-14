import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"  activeStyle={{ color: 'red' }} >About</Link></li>
          <li><Link to="/contact"  activeStyle={{ color: 'red' }} >Contact</Link></li>
          <li><Link to="/products"  activeStyle={{ color: 'red' }} >Products</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
