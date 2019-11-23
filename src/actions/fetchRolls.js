export function fetchRolls(){



      fetch('http://localhost:3000/api/v1/rolls', {
        method: "GET"
      })
      .then(res => res.json())
      .then(data => console.log(data))

      dispatch()

}//end of fucntion
