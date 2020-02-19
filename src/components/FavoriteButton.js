import React from 'react'

class FavoriteButton extends React.Component {

  state = {
    buttonStatus: true
  }
  changeStatus = () => {
    this.setState(() => {
      if (this.state.buttonStatus === true) {
        return {
          buttonStatus: false
        }
      } else {
        return {
          buttonStatus: true
        }
      }
    })
  }

  render() {
    return ( <
      div > < button onClick = {
        this.changeStatus
      } > Favorite < /button> <h3> Fav Status: {this.state.buttonStatus.toString()} </h3 > < /div>
    )
  }
}

export default FavoriteButton