import { createStore, compose, applyMiddleware } from 'redux';

import debug from '../middlewares/debug';
import api from '../middlewares/api';

import reducer from '../reducer';
import websocket from '../middlewares/websocket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(debug,api,websocket)),
);

export default store;