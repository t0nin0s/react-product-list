import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
//import CSSModules from 'react-css-modules'
import styles from '../css/header.scss'

class Header extends Component {
  render(){
    return (
      <div className="header">
        <a className="logo" href="/">Website</a>
        <span tabIndex="0" className="burger-icon"></span>
        <nav className="nav-main">
          <ul>
            <li>
              <IndexLink to="/" className="nav-item " activeClassName='nav-active-item'>
                Home <span className="dropdown"/>
              </IndexLink>
              <ul className="sub-nav">
                <li><Link to="#" className="nav-item">this is a submenu 1</Link></li>
                <li><Link to="#" className="nav-item">this is another submenu</Link></li>
                <li><Link to="#" className="nav-item">and another</Link></li>
              </ul>
            </li>
            <li><Link to="/products" className="nav-item" activeClassName='nav-active-item' >Products</Link></li>
            <li><Link to="/about" className="nav-item" activeClassName='nav-active-item' >About</Link></li>
            <li><Link to="/contact" className="nav-item" activeClassName='nav-active-item' >Contact</Link></li>
            <li>
              <Link className="nav-item" activeClassName='nav-active-item'>
                Dropdown 2 <span className="dropdown"/>
              </Link>
              <ul className="sub-nav">
                <li><Link to="#" className="nav-item">this is a submenu 2</Link></li>
                <li><Link to="#" className="nav-item">this is yet another</Link></li>
                <li><Link to="#" className="nav-item">and another 2</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

//export default CSSModules(Header, styles)
export default Header
