export function fetchRolls(){
  return (dispatch) => {
      fetch('http://localhost:3000/api/v1/rolls', {
        method: "GET"
      })
      .then(res => res.json())
      .then(rolls => dispatch({
        type: "FETCH_ROLLS", payload: rolls
      }))

  }
}//end of fucntion
// export default fetchRolls
