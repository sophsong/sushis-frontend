import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
// compose combines a few diff middlewares into one
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import rollReducer from './reducers/rollReducer'
import App from './App';
// import fetchRolls from './actions/fetchRolls'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// set up store

let store = createStore(rollReducer, composeEnhancers( applyMiddleware(thunk)))
//store is for global storage of the api data
//reducers tell us what we want to do w/our store based on specific actions


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));
