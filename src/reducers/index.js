import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import questions from './question'
import users from './user'

export default combineReducers({
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
})