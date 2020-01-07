import React from 'react'
import Ingredients from '../components/Ingredients'
import {Route, Switch} from 'react-router-dom'
import LikeBrownRice from '../components/LikeBrownRice'

class IngredientsContainer extends React.Component {

  render() {
    return (<div>
      <Switch>
        <Route path='/ingredients' component={Ingredients}/>
      </Switch>
    </div>)

  }
}

export default IngredientsContainer
