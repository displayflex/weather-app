import {
  SET_LOCATION_DATA,
  SET_WEATHER_DATA,
  SET_WEATHER_DATA_SUCCESS,
  SET_WEATHER_DATA_ERROR,
  CHANGE_CITY_INPUT,
  SET_CITY_INPUT_VALUE,
  SET_LOCATION_PARAMS,
  FETCH_COORDS_SUCCESS,
  FETCH_COORDS_ERROR,
  FETCH_DATA_FROM_COORDS,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  SET_DATA_FROM_STORAGE,
  SHOW_STORAGED_RESULT,
} from '@/constants/actions'

export const setLocationData = payload => ({
  payload,
  type: SET_LOCATION_DATA,
})

export const setWeatherData = payload => ({
  payload,
  type: SET_WEATHER_DATA,
})

export const setWeatherDataSuccess = payload => ({
  payload,
  type: SET_WEATHER_DATA_SUCCESS,
})

export const setWeatherDataError = () => ({
  type: SET_WEATHER_DATA_ERROR,
})

export const changeCityInput = payload => ({
  payload,
  type: CHANGE_CITY_INPUT,
})

export const setCityInputValue = payload => ({
  payload,
  type: SET_CITY_INPUT_VALUE,
})

export const setLocationParams = () => ({
  type: SET_LOCATION_PARAMS,
})

export const fetchCoordsSuccess = payload => ({
  payload,
  type: FETCH_COORDS_SUCCESS,
})

export const fetchCoordsError = () => ({
  type: FETCH_COORDS_ERROR,
})

export const fetchDataFromCoords = payload => ({
  payload,
  type: FETCH_DATA_FROM_COORDS,
})

export const fetchDataSuccess = payload => ({
  payload,
  type: FETCH_DATA_SUCCESS,
})

export const fetchDataError = () => ({
  type: FETCH_DATA_ERROR,
})

export const setDataFromStorage = payload => ({
  payload,
  type: SET_DATA_FROM_STORAGE,
})

export const showStoragedResult = payload => ({
  payload,
  type: SHOW_STORAGED_RESULT,
})
