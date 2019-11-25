import React from 'react'
// import {Redirect} from 'react-router-dom'
import RollEdit from './RollEdit'

import IngredientsContainer from '../containers/IngredientsContainer'

const Roll = (props) => {

  console.log(props)
  // let roll = props.rolls[props.match.params.id - 1]
  let roll = props.rolls.filter(roll => roll.id === props.match.params.id)[0]

  console.log(roll)
  return (

    <div>
      <h2>
        {roll ? roll.name : null} - {roll ? roll.price : null} - {roll ? roll.rating :null} - {roll ? roll.description : null}
      </h2>
      <IngredientsContainer roll={roll}/><br/>
      <h4>Edit Roll</h4>
      <RollEdit roll={roll}/>
    </div>
  )


}

export default Roll
