const initialState = {
  name: '',
  price: 0.00,
  rating: 0,
  description: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_ROLL':
      return action.rollFormData

    case 'RESET_ROLL_FORM':
      return initialState;

      default:
        return state;
  }
}
