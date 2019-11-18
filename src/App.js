import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchRolls} from './actions/fetchRolls'
//


//class component
class App extends React.Component {

  componentDidMount(){
  }

  //don't complete a repsonse until the prveious is finished completing
  //async Get request, we wont do anything w/ the data we have until we get a response back


  render(){
    return (
        <div className="App">
          App
        </div>

    );
  }
  }

// const mapStateToProps = (state) => {
//   return {
//     rolls: state.rolls
//   }
// }


export default connect(null, {fetchRolls}) (App);
//asking for access to a specific part of the store
