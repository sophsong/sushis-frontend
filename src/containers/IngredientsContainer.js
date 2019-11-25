import React from 'react'
import IngredientInput from '../components/IngredientInput'
import Ingredients from '../components/Ingredients'

class IngredientsContainer extends React.Component {


  render() {
    return (
      <div>
          <IngredientInput roll={this.props.roll}/><br/>
          <Ingredients ingredients={this.props.roll && this.props.account.transactions}/>
      </div>

    )

  }

}

export default IngredientsContainer
