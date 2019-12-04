import React from 'react'
import IngredientInput from '../components/IngredientInput'
import Ingredients from '../components/Ingredients'
import {Route, Switch} from 'react-router-dom'

class IngredientsContainer extends React.Component {


  render() {
    return (
      <div>

        <Switch>
          <Route path='/ingredients' render={(routerProps) => <Ingredients {...routerProps} ingredients={this.props.ingredients}/>}/>
        </Switch>
      </div>

    )

  }

}

export default IngredientsContainer
