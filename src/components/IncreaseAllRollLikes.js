import React from 'react'

class IncreaseAllRollLikes extends React.Component {

  // getRolls(e) {
  //   this.setState({
  //     rating: this.props.dataFromChild
  //   })
  // }

  render() {
    return (< div > <button onClick={this.props.handler
}>
      Increase All Ratings < /button> < /div >)
  }
}

export default IncreaseAllRollLikes