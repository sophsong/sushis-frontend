import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchRolls} from '../actions/fetchRolls'
import Rolls from '../components/Rolls'
import Roll from '../components/Roll'
import RollInput from '../components/RollInput'


class RollsContainer extends React.Component {

  render() {
      return (
          <div>
            <Switch>
              <Route path='/rolls/new' component={RollInput}/>
              <Route path='/rolls/:id' render={(routerProps) => <Roll {...routerProps} rolls={this.props.rolls}/>}/>
              <Route path='/rolls' component={Rolls}/>
            </Switch>
          </div>
      )
  }
}

export default RollsContainer
