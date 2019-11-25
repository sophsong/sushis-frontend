import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import rollReducer from './reducers/rollReducer'
import 'semantic-ui-css/semantic.css'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rollReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));











// import React from 'react';
// import ReactDOM from 'react-dom';
// // import {createStore, applyMiddleware, compose} from 'redux';
// import {compose} from 'redux';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux'
// import rollReducer from './reducers/rollReducer'
// import App from './App';
// import { createStore, applyMiddleware } from 'redux';
// // import store from './store.js'
// import './index.css'
// // import fetchRolls from './actions/fetchRolls'
// import {BrowserRouter as Router} from 'react-router-dom'
// import 'semantic-ui-css/semantic.css'
// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// // set up store
//
// let store = createStore(rollReducer, composeEnhancers( applyMiddleware(thunk)))
// //store is for global storage of the api data
// //reducers tell us what we want to do w/our store based on specific actions
//
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//     <App />
//     </Router>
//   </Provider>
//   ,
//   document.getElementById('root'));
