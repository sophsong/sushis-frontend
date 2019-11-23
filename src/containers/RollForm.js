import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRollFormData } from '../actions/rollForm';
import { createRoll } from '../actions/rollActions';
import FormError from '../components/FormError';


class RollForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentRollFormData = Object.assign({}, this.props.rollFormData, {
      [name]: value
    })
    this.props.updateRollFormData(currentRollFormData)
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createRoll, rollFormData, history} = this.props;
		createRoll(rollFormData, history);
  }

  render() {
    console.log(this.props)
    const { name, price, rating, description } = this.props.rollFormData;

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
            value={name}
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="price"
            value={price}
          />
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="rating"
            value={rating}
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="description"
            value={description}
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
