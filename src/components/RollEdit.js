import React from 'react'
import {connect} from 'react-redux'
import {editRoll} from '../actions/editRoll'

class RollEdit extends React.Component {

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
    let account = {...this.state, id: this.props.account.id}
    this.props.editRoll(account)
    this.setState({
      name: '',
      price: 0,
      rating: 0,
      description: ''
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
          <input type='number' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

RollEdit.defaultProps = {
  accounts: {}
}


export default connect(null, {editRoll})(RollEdit)
