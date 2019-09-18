import { call, put, all, takeEvery, select, throttle } from 'redux-saga/effects'

import { getServiceUrl, mapServiceData } from '@/utils/services'
import { GEOCODEXYZ, SET_LOCATION_PARAMS, CHANGE_CITY_INPUT, SET_WEATHER_DATA } from '@/constants'
import {
  setLocationData,
  fetchCoordsSuccess,
  fetchCoordsError,
  fetchDataFromCoords,
  fetchDataSuccess,
  fetchDataError,
  setCityInputValue,
  setWeatherDataSuccess,
  setWeatherDataError,
} from '@/actions/location'

const fetchCoordsApi = () => {
  return new Promise((resolve, reject) => {
    window.ymaps.ready(() => {
      window.ymaps.geolocation
        .get({
          provider: 'auto',
          autoReverseGeocode: false,
        })
        .then(
          result => {
            resolve(result)
          },
          error => reject(error)
        )
    })
  })
}

const fetchServiceData = async (service, ...args) => {
  const url = getServiceUrl(service, ...args)

  if (!url) {
    throw new Error('Service is not defined')
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

const fetchDataFromCoordsApi = (latitude, longitude) => {
  return fetchServiceData(GEOCODEXYZ, latitude, longitude)
}

const fetchCoordsFromCityNameApi = city => {
  return fetchServiceData(GEOCODEXYZ, city)
}

function * fetchCoordsSaga () {
  try {
    const response = yield call(fetchCoordsApi)

    if (!response || !('geoObjects' in response)) {
      throw new Error('Geolocation data not recieved')
    }

    const [latitude, longitude] = response.geoObjects.position
    yield put(fetchCoordsSuccess({ latitude, longitude }))
  } catch (error) {
    yield put(fetchCoordsError())
  }
}

function * fetchDataFromCoordsSaga (action) {
  try {
    const response = yield call(fetchDataFromCoordsApi, [
      action.payload.latitude,
      action.payload.longitude,
    ])
    yield put(fetchDataSuccess(response))
  } catch (error) {
    yield put(fetchDataError())
  }
}

function * fetchCoordsFromCityNameSaga (action) {
  try {
    const response = yield call(fetchCoordsFromCityNameApi, action)
    yield put(fetchDataSuccess(response))
  } catch (error) {
    yield put(fetchDataError())
  }
}

function * setLocationParamsSaga () {
  yield * fetchCoordsSaga()
  const { latitude, longitude } = yield select(state => state.location.coords)
  yield * fetchDataFromCoordsSaga(fetchDataFromCoords({ latitude, longitude }))
  const city = yield select(state => state.location.data.region)
  yield put(setLocationData({ latitude, longitude, city }))
}

function * handleInputChangeSaga (action) {
  yield put(setCityInputValue(action.payload))
}

function * setWeatherDataSaga (action) {
  let latitude
  let longitude

  if (action.payload) {
    const city = action.payload
    yield * fetchCoordsFromCityNameSaga(city)
    latitude = yield select(state => state.location.data.latt)
    longitude = yield select(state => state.location.data.longt)
    yield put(setLocationData({ latitude, longitude, city }))
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
}

function * watchSetLocationParams () {
  yield takeEvery(SET_LOCATION_PARAMS, setLocationParamsSaga)
}

function * watchChangeCityInput () {
  yield throttle(500, CHANGE_CITY_INPUT, handleInputChangeSaga)
}

function * watchSetWeatherData () {
  yield takeEvery(SET_WEATHER_DATA, setWeatherDataSaga)
}

export default function * () {
  yield all([watchSetLocationParams(), watchChangeCityInput(), watchSetWeatherData()])
}
