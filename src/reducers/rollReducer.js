// // export default function rollReducer(state = {rolls: []}, action) {
// // //most these a jsut functions taht have a specific purpose
// //
// //   // debugger;
// //   return state
// // } //end of function
//
//
// export default (state = [], action) => {
//   switch(action.type) {
//     case 'GET_ROLLS':
//       return action.rolls;
//
//     case 'CREATE_ROLL':
//       return state.concat(action.roll);
//
//     // case 'REMOVE_ROLL':
//     //   return state.filter(roll => roll.id !== action.rollId);
//
//     case 'LIKE_ROLL':
//       return state.map((roll) => {
//         if (roll.id === action.roll.id) {
//           return action.roll
//         } else {
//           return roll
//         }
//       });
//
//
//     default:
//     return state;
//   }
// }

export default function accountReducer(state = {accounts: []}, action) {
  switch (action.type) {
    case 'FETCH_ROLLS':
      return {accounts: action.payload}
    case 'ADD_ROLL':
      return {...state, accounts: [...state.accounts, action.payload]}
    // case 'ADD_INGREDIENT':
    //   let accounts = state.accounts.map(account => {
    //     if (account.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return account
    //     }
    //   })
    //   return {...state, accounts: accounts}
    // case 'DELETE_INGREDIENT':
    //   let accountsTwo = state.accounts.map(account => {
    //     if (account.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return account
    //     }
    //   })
    //   return {...state, accounts: accountsTwo}
    case 'EDIT_ROLL':
      let accountsThree = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accountsThree}
    default:
      return state
  }
}
