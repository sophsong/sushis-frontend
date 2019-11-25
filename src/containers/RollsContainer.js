import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchRolls} from '../actions/fetchRolls'
import Rolls from '../components/Rolls'
import Roll from '../components/Roll'
import RollInput from '../components/RollInput'
import Navbar from '../components/Navbar'
// import RollEdit from '../components/RollEdit'

class RollsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRolls()
  }

  render() {
      return (
          <div>
            <Navbar/>
            <Switch>
              <Route path='/rolls/new' component={RollInput}/>
              <Route path='/rolls/:id' render={(routerProps) => <Roll {...routerProps} rolls={this.props.rolls}/>}/>
              <Route path='/rolls' render={(routerProps) => <Rolls {...routerProps} rolls={this.props.rolls}/>}/>
            </Switch>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    rolls: state.rolls
  }
}

export default connect(mapStateToProps, {fetchRolls})(RollsContainer)
