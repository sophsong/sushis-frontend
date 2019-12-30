export function fetchRolls() {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/rolls', {
        method: "GET"
      })
      .then(res => res.json())
      .then(rolls =>
        dispatch({
          type: 'FETCH_ROLLS',
          payload: rolls
        }),
      )
  } //this function is returned which has dispatch attached (possible bcuz of thunk)
  //taking fetch and inserting it into redux action b/cuz all in one palce
} //end of function