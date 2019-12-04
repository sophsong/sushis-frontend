// import React from 'react'
// import {connect} from 'react-redux'
// import {extraIngredient} from '../actions/extraIngredient'
//
// class IngredientInput extends React.Component {
//
//   state = {
//     name: '',
//     amount: 0
//   }
//
//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//
//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.addIngredient(this.state, this.props.account.id)
//     this.setState({
//       name: '',
//       amount: 0
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Ingredient Name:</label> <br/>
//           <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
//           <label>Ingredient Amount:</label> <br/>
//           <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}/><br/>
//           <input type="submit"/>
//         </form>
//       </div>
//     )
//
//   }
// }
//
//
// export default connect(null, {extraIngredient})(IngredientInput)
