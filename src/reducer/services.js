import { CHANGE_SERVICE } from '@/constants/actions'
import allServices from '@/services.json'

const initialState = {
  current: 'OPEN_WEATHER',
}

const services = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE:
      if (allServices.filter(service => service.id === action.payload.id).length > 0) {
        return {
          ...state,
          current: action.payload.id,
        }
      }
      return state
    default:
      return state
  }
}

export default services
