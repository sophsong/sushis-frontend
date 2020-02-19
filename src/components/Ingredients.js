import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchIngredients} from '../actions/fetchIngredients'
// import LikeAll from './LikeAll'
import AddColor from './AddColor'

class Ingredients extends React.Component {

  state = {
    likes: 0,
    // status: "Not Clicked"
  }
  componentDidMount() {
    this.props.fetchIngredients()
  }

  // added
  sortBy(e) {
    this.forceUpdate();
    this.props.ingredients.sort(function(a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
  }

  addLikes = (e) => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  filterBy(e) {
    this.forceUpdate();
    const filteredIngredients = [this.props.ingredients.filter(function(ingredient) {
        return ingredient.name[0] === 'B'
      })]

    console.log(filteredIngredients)
  }

  render() {
    var ingredientList = this.props.ingredients; // typically helpful to create a local version of state data, so that it is not automatically updated
    var useThis = this
    return (<div>
      <h1>
        List of Ingredients
      </h1>
      <p>
        {
          ingredientList && ingredientList.map(function(ingredient) {
            return <div key={ingredient.id}>
              <p>{ingredient.name}</p>
              <h3>
                {useThis.state.likes}</h3>

            </div>

          })
        }

      </p>
      <p>
        {this.state.status}</p>
      // // //

      <button onClick={(e) => this.sortBy(e)}>
        Sort
      </button>

      <button onClick={(e) => this.filterBy(e)}>
        Filter
      </button>
      <AddColor></AddColor>

    </div>)
  }
}
const mapStateToProps = ({ingredients}) => {
  return {ingredients: ingredients}
}

export default connect(mapStateToProps, {fetchIngredients})(Ingredients)
