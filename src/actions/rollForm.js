export const updateRollFormData = (rollFormData)=> {
  return {
    type: 'UPDATED_ROLL',
    rollFormData
  }
}
export const resetRollForm = () => {
  return {
    type: 'RESET_ROLL_FORM'
  }
}
