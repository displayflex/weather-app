import {
  SET_LOCATION_DATA,
  SET_WEATHER_DATA,
  SET_CITY_INPUT_VALUE,
  SET_LOCATION_PARAMS,
  FETCH_COORDS_SUCCESS,
  FETCH_COORDS_ERROR,
  FETCH_DATA_FROM_COORDS,
  FETCH_DATA_FROM_COORDS_SUCCESS,
  FETCH_DATA_FROM_COORDS_ERROR,
} from '@/constants/actions'

export const setLocationData = payload => ({
  payload,
  type: SET_LOCATION_DATA,
})

export const setWeatherData = payload => ({
  payload,
  type: SET_WEATHER_DATA,
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

export const fetchDataFromCoordsSuccess = payload => ({
  payload,
  type: FETCH_DATA_FROM_COORDS_SUCCESS,
})

export const fetchDataFromCoordsError = () => ({
  type: FETCH_DATA_FROM_COORDS_ERROR,
})
