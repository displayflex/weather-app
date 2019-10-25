import { call, put, takeEvery, select } from 'redux-saga/effects'
import getHistory from 'react-router-global-history'

import {
  setLocationData,
  fetchDataSuccess,
  fetchDataError,
  setWeatherDataSuccess,
  setWeatherDataError,
} from '@/actions/location'
import { setDataToStorage } from '@/actions/storage'
import { fetchServiceData } from '.'
import { mapServiceData } from '@/utils/services'
import { LOCATIONIQ, SET_WEATHER_DATA, WEATHER_PAGE_PATH } from '@/constants'

const fetchCoordsFromCityNameApi = city => {
  return fetchServiceData(LOCATIONIQ, city)
}

function * fetchCoordsFromCityNameSaga (action) {
  try {
    const response = yield call(fetchCoordsFromCityNameApi, action)
    yield put(fetchDataSuccess(response))
  } catch (error) {
    yield put(fetchDataError())
  }
}

function * setWeatherDataSaga (action) {
  let latitude
  let longitude

  if (action.payload) {
    const cityName = action.payload
    yield * fetchCoordsFromCityNameSaga(cityName)
    latitude = yield select(state => state.location.data[0].lat)
    longitude = yield select(state => state.location.data[0].lon)
    yield put(setLocationData({ latitude, longitude, cityName }))
  } else {
    latitude = yield select(state => state.location.coords.latitude)
    longitude = yield select(state => state.location.coords.longitude)
  }

  const service = yield select(state => state.services.current)

  try {
    const data = yield call(fetchServiceData, service, latitude, longitude)
    yield put(setWeatherDataSuccess(mapServiceData(service, data)))
  } catch (error) {
    yield put(setWeatherDataError())
  }

  yield put(setDataToStorage())

  getHistory().push(WEATHER_PAGE_PATH)
}

function * watchSetWeatherData () {
  yield takeEvery(SET_WEATHER_DATA, setWeatherDataSaga)
}

export default watchSetWeatherData
