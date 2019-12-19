

export default function ingredientReducer(state = {}, action) {
  // debugger
  switch (action.type) {
    case 'FETCH_INGREDIENTS':
      return {...state, ingredients: action.payload}
    default:
      return state
  }
}
