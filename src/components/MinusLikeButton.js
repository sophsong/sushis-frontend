import React from 'react'

class MinusLikeButton extends React.Component {

  state = {
    likes: 0
  }

  dislikeRoll = () => {

    this.setState((prevState) => {
      return {
        likes: prevState.likes - 1
      }
    })
  }

  render() {
    return (< div > <button onClick={this.dislikeRoll}>
      Dislike < /button>
      <p>
        Dislikes: {this.state.likes}</p>

      < /div >
        )
  };


}

export default MinusLikeButton