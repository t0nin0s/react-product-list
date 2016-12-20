import React, { Component } from 'react'
import { Link } from 'react-router'
//import CSSModules from 'react-css-modules'
import styles from '../css/header.scss'

class Header extends Component {
  render(){
    return (
      <nav className="nav-main">
        <div className="logo">Website</div>
        <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about"  className="nav-item" activeClassName='nav-active-item'>About</Link></li>
          <li><Link to="/contact"  className="nav-item" activeClassName='nav-active-item'>Contact</Link></li>
          <li><Link to="/products"  className="nav-item" activeClassName='nav-active-item' >Products</Link></li>
        </ul>
      </nav>
    )
  }
}

//export default CSSModules(Header, styles)
export default Header
