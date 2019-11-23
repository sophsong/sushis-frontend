import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { likeRoll } from '../actions/rollActions';

class RollCard extends Component {

	render() {

		const { roll, rolls } = this.props;

		return (
			<div key={roll.id} className="RollCard">
				<a href={`rolls/${roll.id}`}>
					<h1 className="card-title">{roll.name}</h1>
				</a>
		    <br></br>
				<img src="https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7baeff72dbf865f4ca4267cbe433b4cb&auto=format&fit=crop&w=1650&q=80" alt="" className="media" />
		    <br></br>
		    <div className="card-read">Read</div>
				<button onClick={() => {this.props.likeRoll(roll, rolls)}}>Like</button> {this.props.roll.likes}
		  </div>
		)
	}
}


const mapStateToProps = state => {
	return {
		rolls: state.rolls
	}
}



export default connect(mapStateToProps, {likeRoll})(RollCard);
