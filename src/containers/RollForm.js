import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRollFormData } from '../actions/rollForm';
import { createRoll } from '../actions/rollActions';
import FormError from '../components/FormError';


class RollForm extends Component {

  state = {
    name: "",
    price: 0,
    rating: 0,
    description: ''
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value});

    const {name, value} = event.target;
    const currentRollFormData = Object.assign({}, this.props.rollFormData, {
      [name]: value
    })
    this.props.updateRollFormData(currentRollFormData);
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createRoll, history} = this.props;
    const rollFormData = this.state;

createRoll(rollFormData, history);
  }

  render() {

    return (
      <div>
        <h1 className="rollName">Create a New Roll</h1>
        {this.props.errors === true ? <FormError/> : null}

      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={this.state.name}
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="price"
            value={this.state.price}
          />
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="rating"
            value={this.state.rating}
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="description"
            value={this.state.description}
          />

          <button type="submit">Add Roll</button>
        </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rollFormData: state.rollFormData,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {
  updateRollFormData,
  createRoll
})(RollForm);
