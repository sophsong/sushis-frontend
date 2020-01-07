import React from 'react'

class MinusLikeButton extends React.Component {

  state = {
    likes: 0
  }

  dislikeRoll = () => {
    // this.setState({
    //   likes: this.state.likes - 1
    //
    // })
    //  console.log(this.state)
    this.setState((prevState)=> {
      return {likes: prevState.likes - 1}
    })
  }

  render() {
    return (< div > <button onClick={this.dislikeRoll}>
      Dislike < /button> <h3> {this.state.likes}</h3>

      < /div >
        )
  };


}

export default MinusLikeButton
