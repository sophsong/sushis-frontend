import React from 'react'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
// import {extraIngredient} from '../actions/extraIngredient'
import {fetchIngredients} from '../actions/fetchIngredients'

class Ingredients extends React.Component {

  componentDidMount(){
    // debugger
    this.props.fetchIngredients()
  }


render() {
  //
  return (
    <div>
      <h1>  List of Ingredients </h1>
    <p> {this.props.ingredients && this.props.ingredients.map(function(ingredient){
          return <div>       <Link to={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
    </div>
    })}</p>
    </div>

    )
  }
}

const mapStateToProps = ({ingredients}) => {
  return {ingredients: ingredients}
}

export default connect(mapStateToProps, {fetchIngredients})(Ingredients)
