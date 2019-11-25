export const addRoll = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/rolls', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(roll => dispatch({type: 'ADD_ROLL', payload: roll}))
  }

}
