import { SET_LOCATION_DATA, SET_CITY_INPUT_VALUE } from '@/constants/actions'

const initialState = {
  city: '',
  cityInputValue: '',
  coords: {
    longitude: null,
    latitude: null,
  },
  temperature: null,
  weather: '',
}

const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_DATA:
      return {
        ...state,
        city: action.payload.city,
        coords: {
          ...state.coords,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
        },
      }
    case SET_CITY_INPUT_VALUE:
      return {
        ...state,
        cityInputValue: action.payload,
      }

    default:
      return state
  }
}

export default location
