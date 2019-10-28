import {
  SET_LOCATION_DATA,
  SET_CITY_INPUT_VALUE,
  SET_WEATHER_DATA_SUCCESS,
  SET_WEATHER_DATA_ERROR,
  FETCH_COORDS_SUCCESS,
  FETCH_COORDS_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  SET_DATA_FROM_STORAGE,
} from '@/constants/actions'

const initialState = {
  cityName: '',
  cityInputValue: '',
  coords: {
    latitude: null,
    longitude: null,
  },
  weather: {
    temperature: null,
    description: '',
    weatherImageSrc: '',
    pressure: null,
    wind: null,
    humidity: null,
  },
  data: {},
  isErrorInLoad: false,
  isStorageDataRecieved: false,
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
        weather: {
          ...state.weather,
          temperature: action.payload.temperature,
          description: action.payload.description,
          weatherImageSrc: action.payload.weatherImageSrc,
          pressure: action.payload.pressure,
          wind: action.payload.wind,
          humidity: action.payload.humidity,
        },
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

    case SET_DATA_FROM_STORAGE:
      return {
        ...state,
        cityName: action.payload.cityName,
        weather: {
          ...state.weather,
          ...action.payload.weather,
        },
        isStorageDataRecieved: true,
      }

    default:
      return state
  }
}

export default location
