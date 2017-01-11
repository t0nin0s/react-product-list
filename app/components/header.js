import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
//import CSSModules from 'react-css-modules'
import styles from '../css/header.scss'

class Header extends Component {
  render(){
    return (
      <nav className="nav-main">
        <div className="logo">Website</div>
        <ul>
          <li>
            <IndexLink to="/" className="nav-item " activeClassName='nav-active-item'>
              Home <span className="dropdown"/>
            </IndexLink>
            <ul className="sub-nav">
              <li><Link to="/#" >this is a submenu 1</Link></li>
              <li><Link to="/#">this is another submenu</Link></li>
              <li><Link to="/#">and another</Link></li>
            </ul>
          </li>
          <li><Link to="/products"  className="nav-item" activeClassName='nav-active-item' >Products</Link></li>
          <li>
            <Link className="nav-item" activeClassName='nav-active-item'>
              Dropdown 2 <span className="dropdown"/>
            </Link>
            <ul className="sub-nav">
              <li><Link to="/#" >this is a submenu 2</Link></li>
              <li><Link to="/#">this is yet another</Link></li>
              <li><Link to="/#">and another 2</Link></li>
            </ul>
          </li>
          <li><Link to="/about"  className="nav-item" activeClassName='nav-active-item'>About</Link></li>
          <li><Link to="/contact"  className="nav-item" activeClassName='nav-active-item'>Contact</Link></li>

        </ul>
      </nav>
    )
  }
}

//export default CSSModules(Header, styles)
export default Header
