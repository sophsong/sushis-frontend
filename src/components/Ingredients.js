import React from 'react'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
import {extraIngredient} from '../actions/extraIngredient'

class Ingredients extends React.Component {

state = {}


render() {
  return (
      <div>
        <h1>  List of Ingredients </h1>
        
      </div>
    )
  }
}

export default connect(null)(Ingredients)
