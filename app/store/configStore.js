import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
    const middlewares = [ createLogger(), thunkMiddleware ];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
}

export default configureStore;
