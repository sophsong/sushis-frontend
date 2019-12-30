import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchIngredients} from '../actions/fetchIngredients'

class Ingredients extends React.Component {

  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       fetchIngredients
  //     }
  //     this.sortByNameAsc = this.sortByNameAsc.bind(this);
  //     this.sortByNameDesc = this.sortByNameDesc.bind(this);
  //   }
  //
  //   sortByNameAsc() {
  //     this.setState(prevState => {
  //       this.state.ingredients.sort((a, b) => (a.name - b.name))
  //     });
  //   }
  //
  //   sortByNameDesc() {
  //     this.setState(prevState => {
  //       this.state.ingredients.sort((a, b) => (b.name - a.name))
  //     });
  //   }
  //
  //   render() {
  //     return (<div>
  //       Ingredients
  //       <button onClick={this.sortByNameAsc}>
  //         ASC
  //       </button>
  //       <button onClick={this.sortByNameDesc}>
  //         DESC
  //       </button>
  //
  //       {
  //         this.state.ingredients.map((ingredient) => <div id="ingredients">
  //           <Link to={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
  //         </div>)
  //       }
  //     </div>)
  //   }
  // }
  // export default Ingredients

  //trying

  componentDidMount() {
    this.props.fetchIngredients()
  }

  sortBy(e) {
    this.forceUpdate();
    const sortedIngredients = [this.props.ingredients.sort(function(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })]
    console.log(sortedIngredients)

    // this sorts it within the console,
    // but its not rendering within console

  }

  render() {
    return (<div>
      <h1>
        List of Ingredients
      </h1>
      <p >
        {
          this.props.ingredients && this.props.ingredients.map(function(ingredient) {
            return <div id="ingredients">
              <Link to={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
            </div>
          })
        }
      </p>
      <button onClick={(e) => this.sortBy(e)}>
        Sort
      </button>

    </div>)
  }
}

const mapStateToProps = ({ingredients}) => {
  return {ingredients: ingredients}
}

export default connect(mapStateToProps, {fetchIngredients})(Ingredients)
