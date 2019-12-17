import React from 'react'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
import {extraIngredient} from '../actions/extraIngredient'

class Ingredients extends React.Component {

state = {}


render() {
  //
  return (
    <div>
  <h1>  List of Ingredients </h1>
    <p> {this.props.ingredients.map(function(ingredient){
      return <div>       <Link to={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
 </div>
    })}</p>
    </div>

    )
  }
}

export default connect(null)(Ingredients)
