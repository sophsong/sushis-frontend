import {combineReducers} from 'redux'
import ingredientReducer from './ingredientReducer'
import rollReducer from './rollReducer'


export default combineReducers({
  rolls: rollReducer,
  ingredients: ingredientReducer
})
