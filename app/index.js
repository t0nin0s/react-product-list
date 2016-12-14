import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './store/configStore';
//import App from './components/app';
import ProductDetailContainer from './containers/productDetailContainer'
import ProductListContainer from './containers/productListContainer'

import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

const store = configureStore();

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

ReactDOM.render(
  <Provider store = {store} >
    <Router history = {browserHistory}>
      <Route path = "/" component = {Layout}>
       <IndexRoute component = {Home} />
       <Route path = "/about" component = {About} />
       <Route path = "/contact" component = {Contact} />
       <Route path = "/products" component = {ProductListContainer} >
        <Route path = "/products/:productId" component = {ProductDetailContainer} />
       </Route>
      </Route>
   </Router>
  </Provider>, document.getElementById('app'));
