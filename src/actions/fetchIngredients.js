export function fetchIngredients() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/ingredients', {
        method: "GET"
      })
      .then(res => res.json())
      .then(ingredients =>
        dispatch({
          type: 'FETCH_INGREDIENTS',
          payload: ingredients
        }),
      )
  }

} //end of fucntion