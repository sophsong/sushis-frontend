// const initialState = []

// export default function ingredientReducer(state = [], action) {
//   switch (action.type) {
//     case 'FETCH_INGREDIENTS':
//       return {ingredients: action.payload}
//     default:
//         return state
//   }
// }

export default function ingredientReducer(state = [], action) {
  debugger
  switch (action.type) {
    case 'FETCH_INGREDIENTS':
    debugger
      return {ingredients: action.payload}
    default:
      return state
  }
}
