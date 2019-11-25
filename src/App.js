import React from 'react';
// import {connect} from 'react-redux'
import RollsContainer from './containers/RollsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <RollsContainer/>
      </div>
    );
  }
}


export default App;

// code from harpreet

// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Rolls from './containers/Rolls';
// import RollForm from './containers/RollForm';
// import RollShow from './containers/RollShow';
//
//
// class App extends Component {
//
//   render() {
//     return (
//       <div className="App">
//         <Router>
//             <div>
//               <Navbar/>
//               <Container>
//               <Switch>
//                 <Route exact path='/' component={Home}/>
//                 <Route exact path='/rolls' component={Rolls}/>
//                 <Route exact path='/rolls/new' component={RollForm}/>
//                 <Route path='/rolls/:rollId' component={RollShow}/>
//               </Switch>
//             </Container>
//             </div>
//         </Router>
//       </div>
//     );
//   }
// }
//
// export default App;





// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import {connect} from 'react-redux'
// import {fetchRolls} from './actions/fetchRolls'
// //
//
//
// //class component
// class App extends React.Component {
//
//   componentDidMount(){
//   }
//
//   //don't complete a repsonse until the prveious is finished completing
//   //async Get request, we wont do anything w/ the data we have until we get a response back
//
//
//   render(){
//     return (
//         <div className="App">
//           App
//         </div>
//
//     );
//   }
//   }
//
// // const mapStateToProps = (state) => {
// //   return {
// //     rolls: state.rolls
// //   }
// // }
//
//
// export default connect(null, {fetchRolls}) (App);
// //asking for access to a specific part of the store
