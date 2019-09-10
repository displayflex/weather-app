import { combineReducers } from 'redux'
import services from '@/reducer/services'
import location from '@/reducer/location'
import loading from '@/reducer/loading'

export default combineReducers({
  services,
  location,
  loading,
})
