export default function rollReducer(state = [], action) {

  switch (action.type) {
    case 'FETCH_ROLLS':
      return [
        ...action.payload
      ]
    case 'ADD_ROLL':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}