export const extraIngredient = (ingredient, rollId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/rolls/${rollId}/ingredients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredient)
    })
    .then(response => response.json())
    .then(roll => {
        if (roll.error) {
          alert(roll.error)
        } else {
          dispatch({type: 'ADD_INGREDIENT', payload: roll})
        }
      }
    )
  }
}
