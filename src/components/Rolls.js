import React from 'react'
import { Link} from 'react-router-dom'
import {Roll} from './Roll'
import {connect} from 'react-redux'
import {fetchRolls} from '../actions/fetchRolls'

class Rolls extends React.Component {

  componentDidMount(){
    fetchRolls()
  }


render(){
  return (
    <div>

  <h1>  List of Rolls </h1>
    <p> {this.props.rolls.map(function(roll){
      return <div>       <Link to={`/rolls/${roll.id}`}>{roll.name}</Link>
 </div>
    })}</p>
    </div>


  )


}}

const mapStateToProps = ({rolls}) => {
  return {rolls: rolls}
}

// export default Rolls
export default connect(mapStateToProps, {fetchRolls})(Rolls)
