export default function ingredientReducer(state = [], action) {

  switch (action.type) {
    case 'FETCH_INGREDIENTS':
      return [
        ...state, ...action.payload
      ]
    default:
      return state
  }
}