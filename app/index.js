'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Main from './components/main.js';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={ store } >
    <Main />
  </Provider>, document.getElementById('app'));
