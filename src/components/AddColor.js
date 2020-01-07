import React from 'react'

class AddColor extends React.Component {

  state = {
    bgColor: 'red'
  }

  handleClick(e) {
    this.setState({bgColor: 'green'})

  }
  render() {
    return (< div > <button onClick = {
      (e) => {
        this.handleClick(e)
      }
    }
    style = {
      {
        backgroundColor: this.state.bgColor
      }
    } > Change Color < /button> </div >)

  }
}
export default AddColor
