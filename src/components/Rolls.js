import React from 'react'
import { Link} from 'react-router-dom'
// import {props} from './Roll'
// import rolls from '../actions/fetchRolls'
// console.log(props)
function Rolls(rolls){

console.log(rolls)
  return (
    <div>
      {props.rolls.map(roll =>
        <li key={roll.id}>
          <Link to={`/rolls/${roll.id}`}>{roll.name} - ${roll.price}</Link>
        </li> )}
    </div>
    

  )
}

export default Rolls
