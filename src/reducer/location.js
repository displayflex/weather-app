import {
  SET_LOCATION_DATA,
  SET_CITY_INPUT_VALUE,
  SET_WEATHER_DATA,
  FETCH_COORDS_SUCCESS,
  FETCH_COORDS_ERROR,
  FETCH_DATA_FROM_COORDS_SUCCESS,
  FETCH_DATA_FROM_COORDS_ERROR,
} from '@/constants/actions'

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
  data: null,
  isErrorInLoad: false,
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
        isErrorInLoad: true,
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

    case FETCH_COORDS_SUCCESS:
      return {
        ...state,
        coords: {
          ...state.coords,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      }

    case FETCH_COORDS_ERROR:
      return {
        ...state,
        isErrorInLoad: true,
      }

    case FETCH_DATA_FROM_COORDS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }

    case FETCH_DATA_FROM_COORDS_ERROR:
      return {
        ...state,
        isErrorInLoad: true,
      }

    default:
      return state
  }
}

export default location
