import React from 'react'

class LikeButton extends React.Component {

  state = {
    likes: 0
  }

  likeRoll = () => {
    // this.setState(function(prevState, props) {
    //   return {
    //     likes: prevState.likes + 1
    //   }
    // })
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1
      }
    }) //aroww function

  } //best practice

  render() {

    return (< div > <button onClick={this.likeRoll}>
      Like < /button>
      <p>
        Likes: {this.state.likes}</p>
      < /div >
        )
      }
      //onClick is a synthetic event

    }

    export default LikeButton