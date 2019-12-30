import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import reducer from './reducers/index'
import 'semantic-ui-css/semantic.css'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// console.log(store.getState())

ReactDOM.render(<Provider store={store}>
  <Router>
    <App/>
  </Router>
</Provider>, document.getElementById('root'));
