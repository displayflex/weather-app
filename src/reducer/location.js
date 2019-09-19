import {
  SET_LOCATION_DATA,
  SET_CITY_INPUT_VALUE,
  SET_WEATHER_DATA_SUCCESS,
  SET_WEATHER_DATA_ERROR,
  FETCH_COORDS_SUCCESS,
  FETCH_COORDS_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  RESET_IS_WEATHER_DATA_SET,
} from '@/constants/actions'

const initialState = {
  cityName: '',
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
  isWeatherDataSet: false,
}

const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_DATA:
      return {
        ...state,
        cityName: action.payload.cityName,
        coords: {
          ...state.coords,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
        },
      }

    case SET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        temperature: action.payload.temperature,
        weather: action.payload.weather,
        weatherImageSrc: action.payload.weatherImageSrc,
        isWeatherDataSet: true,
      }

    case SET_WEATHER_DATA_ERROR:
      return {
        ...state,
        isErrorInLoad: true,
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

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }

    case FETCH_DATA_ERROR:
      return {
        ...state,
        isErrorInLoad: true,
      }

    case RESET_IS_WEATHER_DATA_SET:
      return {
        ...state,
        isWeatherDataSet: false,
      }

    default:
      return state
  }
}

export default location
