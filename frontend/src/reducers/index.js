import { combineReducers } from 'redux'
import contacts from './contacts'
import status from './status'

export default combineReducers({
  contacts,
  status
})