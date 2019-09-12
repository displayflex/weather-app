import { SET_LOCATION_DATA, SET_WEATHER_DATA, SET_CITY_INPUT_VALUE } from '@/constants/actions'

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
