// const initialState = []
export default function rollReducer(state = {}, action) {

  switch (action.type) {
    case 'FETCH_ROLLS':
    debugger
      return {...state, rolls: action.payload}
    case 'ADD_ROLL':
      return {...state, rolls: [...state.rolls, action.payload]}
    default:
      return state
  }
}
