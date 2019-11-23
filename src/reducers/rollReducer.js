// export default function rollReducer(state = {rolls: []}, action) {
// //most these a jsut functions taht have a specific purpose
//
//   // debugger;
//   return state
// } //end of function


export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ROLLS':
      return action.rolls;

    case 'CREATE_ROLL':
      return state.concat(action.roll);

    case 'REMOVE_ROLL':
      return state.filter(roll => roll.id !== action.rollId);

    case 'LIKE_ROLL':
      return state.map((roll) => {
        if (roll.id === action.roll.id) {
          return action.roll
        } else {
          return roll
        }
      });


    default:
    return state;
  }
}
