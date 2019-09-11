import { combineReducers } from 'redux'
import services from '@/reducer/services'
import location from '@/reducer/location'

export default combineReducers({
  services,
  location,
})
