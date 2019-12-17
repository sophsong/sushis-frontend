import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import rollReducer from './reducers/rollReducer'
// import ingredientReducer from './reducers/ingredientReducer'
import 'semantic-ui-css/semantic.css'
import App from './App';


// const rootReducer = combineReducers({
//   rolls : rollReducer,
//   ingredients: ingredientReducer
// })
//the rolls state will be monitored by the rollReducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rollReducer, composeEnhancers(applyMiddleware(thunk)))
// let store = createStore(rollReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
