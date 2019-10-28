import { CHANGE_SERVICE, SET_SERVICE_DATA } from '@/constants/actions'
import allServices from '@/services.json'
import { OPEN_WEATHER } from '@/constants'

const initialState = {
  current: OPEN_WEATHER,
  data: {},
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

    case SET_SERVICE_DATA:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return state
  }
}

export default services
