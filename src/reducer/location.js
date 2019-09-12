import { SET_LOCATION_DATA, SET_CITY_INPUT_VALUE, SET_WEATHER_DATA } from '@/constants/actions'

const initialState = {
  city: '',
  cityInputValue: '',
  coords: {
    latitude: null,
    longitude: null,
  },
  temperature: null,
  weather: '',
  weatherImageSrc: '',
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

    case SET_WEATHER_DATA:
      return {
        ...state,
        temperature: action.payload.temperature,
        weather: action.payload.weather,
        weatherImageSrc: action.payload.weatherImageSrc,
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
