import React from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchRolls} from '../actions/fetchRolls'

class Rolls extends React.Component {


  componentDidMount(){
    debugger
    this.props.fetchRolls()
  }


  render(
  ){
    return (
      <div>
        <h1>  List of Rolls </h1>
      <p> { this.props.rolls &&
          this.props.rolls.map(function(roll){
        return <div>       <Link to={`/rolls/${roll.id}`}>{roll.name}</Link>
      </div>
      })}</p>
      </div>
    )
  }}



const mapStateToProps = (state) => {
  debugger
  return {rolls: state.rolls}
}


export default connect(mapStateToProps, {fetchRolls})(Rolls)
