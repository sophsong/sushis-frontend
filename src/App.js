import React from 'react';
// import {connect} from 'react-redux'
import RollsContainer from './containers/RollsContainer'
// import IngredientInput from './components/IngredientInput'
import IngredientsContainer from './containers/IngredientsContainer'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Router>
        <RollsContainer/>
        <IngredientsContainer/>
         <Route exact path='/' component={Home}/>
         </Router>
      </div>
    );
  }
}


export default App;
