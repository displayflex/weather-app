import { CHANGE_SERVICE } from '@/constants/actions'
import allServices from '@/services.json'

const initialState = {
  current: 'OPEN_WEATHER', // @todo: from constants??
  geolocationData: null,
  isYandexScriptLoaded: false,
  isYandexScriptLoadFailed: false,
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

    case 'YANDEX_SCRIPT_LOADED':
      return {
        ...state,
        isYandexScriptLoaded: true,
      }

    case 'YANDEX_SCRIPT_LOAD_FAILED':
      return {
        ...state,
        isYandexScriptLoadFailed: true,
      }

    case 'GEOLOCATION_DATA_RECEIVED':
      return {
        ...state,
        geolocationData: action.payload.data,
      }

    case 'GEOLOCATION_DATA_REQUEST_FAILED':
      return {
        ...state,
        geolocationData: null,
      }

    default:
      return state
  }
}

// @todo constants

export default services
