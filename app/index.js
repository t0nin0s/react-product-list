import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './components/main.js';
import configureStore from './store/configStore';
import { selectProduct, fetchProducts } from './actions/productActions'

const store = configureStore();

// store.dispatch(fetchProducts())

ReactDOM.render(
  <Provider store = { store } >
    <Main />
  </Provider>, document.getElementById('app'));
