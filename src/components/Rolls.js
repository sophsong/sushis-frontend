import React from 'react'
// import { Link} from 'react-router-dom'
// import {Roll} from './Roll'
import {connect} from 'react-redux'
import {fetchRolls} from '../actions/fetchRolls'

class Rolls extends React.Component {

  componentDidMount(){
    fetchRolls()
  }


render(){
  return (
    <div>

  <h1>  Rolls Page </h1>
    <li> {this.props.rolls.map(function(roll){
      return <div> {roll.name} </div>
    })}</li>
    </div>


  )


}}

const mapStateToProps = ({rolls}) => {
  return {rolls: rolls}
}

// export default Rolls
export default connect(mapStateToProps, {fetchRolls})(Rolls)
