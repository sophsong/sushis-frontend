import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchRolls} from '../actions/fetchRolls'
import LikeButton from './LikeButton'
import MinusLikeButton from './MinusLikeButton'
import IncreaseAllRollLikes from './IncreaseAllRollLikes'
import FavoriteButton from './FavoriteButton'
class Rolls extends React.Component {

  state = {
    rating: 10,
    likes: 0
  }

  componentDidMount() {
    this.props.fetchRolls()
    //in ordeer to access correct data
  }

  handler = (e) => {
    this.setState((prevState) => {
      return {
        rating: prevState.rating + 1
      }
    })
  }

  increaseLike = (e) => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1
      }
    })
  }

  decreaseLike = (e) => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes - 1
      }
    })
  }

  decreaseRatings = () => {
    this.setState((prevState) => {
      return {
        rating: prevState.rating - 1
      }
    })
  }

  render() {

    return (<div>
      <h1>
        List of Rolls
      </h1>
      <IncreaseAllRollLikes handler={(e) => {
          this.handler(e)
        }}/>
      <button onClick={this.decreaseRatings}>
        Decrease All Ratings
      </button>
      <div>

        {
          this.props.rolls && this.props.rolls.map((roll) => {

            return <div key={roll.id}>
              <h3>
                <Link to={`/rolls/${roll.id}`}>{roll.name}</Link>
              </h3>
              <p>
                Rating: {this.state.rating}</p>

              <LikeButton/>
              <MinusLikeButton/>
              <FavoriteButton/>
            </div>
          })
        }</div>

    </div>)
  }
}

const mapStateToProps = (state) => {

  return {rolls: state.rolls}

}

export default connect(mapStateToProps, {fetchRolls})(Rolls)
// export default Rolls