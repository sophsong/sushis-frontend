import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchRolls} from '../actions/fetchRolls'

class Rolls extends React.Component {

  componentDidMount() {
    this.props.fetchRolls()
    //in ordeer to access correct data
  }

  render() {

    return (<div>
      <h1>
        List of Rolls
      </h1>
      <p>
        {console.log(this.props.rolls)}
        {
          console.log(
            this.props.rolls
            ? true
            : false)
        }
        {
          this.props.rolls && this.props.rolls.map((roll) => {

            return <div>
              <Link to={`/rolls/${roll.id}`}>{roll.name}</Link>
            </div>
          })
        }</p>
    </div>)
  }
}

const mapStateToProps = (state) => {

  return {rolls: state.rolls}

}

export default connect(mapStateToProps, {fetchRolls})(Rolls)
// export default Rolls