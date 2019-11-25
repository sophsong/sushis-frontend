// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchIndRoll } from '../actions/rollActions';
// import { deleteRoll } from '../actions/rollActions';
// // import RollForm from './RollForm';
// // import RollCard from '../components/RollCard';
// // import Rolls from './Rolls';
// import LikeButton from '../components/LikeButton';
// import { likeRoll } from '../actions/rollActions';
//
//
//
// class RollShow extends Component {
//
//
//   handleOnClick = () => {
//     this.props.likeRoll(this.props.roll[0])
//   }
//
//   componentDidMount() {
//     this.props.fetchIndRoll(this.props.match.params.rollId);
// 	}
//
//   render() {
//     let roll = this.props.roll[0];
//     const {deleteRoll, history} = this.props;
//
//     return (
//     <div className='rollShow'>
//       {roll ? (
//       <div>
//         <h1 className="rollName">{roll.name}</h1>
//         <h3><p>Price: <br></br>{roll.price}</p></h3>
//         <h3><p>Rating: <br></br>{roll.rating}</p></h3>
//         <h3><p>Description:  {roll.description}</p></h3>
//       </div>
//     ) : (
//       <p>Loading...</p>
//     )}
//     <br></br>
//     <button onClick={() => deleteRoll(roll.id, history)}>
//       Delete
//     </button>
//     {roll ? <LikeButton roll={roll} likeRoll={this.handleOnClick}/> : 'some error happened'}
//     </div>
//     )
//   }
// }
//
//
// const mapStateToProps = (state) => {
//   return ({
//     roll: state.rolls
//   })
// }
//
// export default connect(mapStateToProps, {fetchIndRoll, deleteRoll, likeRoll})(RollShow);
