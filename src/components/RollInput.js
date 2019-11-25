import React from 'react'
import {connect} from 'react-redux'
import {addRoll} from '../actions/addRoll'

class RollInput extends React.Component {

  state = {
    name: '',
    price: 0,
    rating: 0,
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRoll(this.state)
    this.setState({
      name: '',
      balance: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking Roll Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Roll Price: </label>
          <input type='number' placeholder='Price' value={this.state.price} name="price" onChange={this.handleChange}/><br/>
          <label>Checking Roll Description: </label>
          <input type='number' placeholder='Rating' value={this.state.rating} name="rating" onChange={this.handleChange}/><br/>
          <label>Checking Roll Description: </label>
          <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addRoll})(RollInput)
