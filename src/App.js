import React from 'react';
// import logo from './logo.svg';
import './App.css';
//


//class component
class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/rolls', {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => console.log(data))
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


export default App;
