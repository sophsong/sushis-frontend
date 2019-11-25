export const editRoll = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(roll => dispatch({type: 'EDIT_ROLL', payload: roll}))
  }

}
