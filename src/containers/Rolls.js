// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import '../App.css'
// import RollCard from '../components/RollCard';
// import RollForm from './RollForm';
// import RollShow from './RollShow';
// import { fetchRolls } from '../actions/rollActions';
// import { Switch, Route } from 'react-router-dom';
// import { likeRoll } from '../actions/rollActions';
//
//
// class Rolls extends Component {
//
//   componentDidMount() {
//     this.props.fetchRolls()
//   }
//
//   render() {
//     const { rolls, match } = this.props;
//     const sortedRolls = rolls.sort(function (a, b) {
//       return b.likes - a.likes;
//     })
//
//     return (
//       <div>
//         <Switch>
//           <Route exact path={match.url}
//             render={() =>
//               <div className="RollsContainer">
//                 <h1 className="rollName">Rolls</h1>
//                 {sortedRolls.map(roll => <RollCard key={roll.id} roll={roll} />)}
//               </div>
//             }
//           />
//           <Route exact path="/rolls/new" component={RollForm} />
//           <Route
//             path="/rolls/:rollId"
//             component={RollShow}
//           />
//         </Switch>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return ({
//     rolls: state.rolls
//   })
// }
//
// export default connect(mapStateToProps, { fetchRolls, likeRoll })(Rolls);
