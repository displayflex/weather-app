import { CHANGE_SERVICE } from '@/constants/actions'
import { OPEN_WEATHER, WEATHERSTACK } from '@/constants/services'

const initialState = {
  all: [
    {
      id: OPEN_WEATHER,
      name: 'Open Weather',
    },
    {
      id: WEATHERSTACK,
      name: 'Weatherstack',
    },
  ],
  current: 'OPEN_WEATHER',
}

const services = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE:
      if (initialState.all.filter(service => service.id === action.payload.id).length > 0) {
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
