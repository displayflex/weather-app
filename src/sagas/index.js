import { call, put, all, takeEvery, select } from 'redux-saga/effects'

import { getServiceUrl } from '@/utils/services'
import { GEOCODEXYZ, SET_LOCATION_PARAMS } from '@/constants'
import {
  setLocationData,
  fetchCoordsSuccess,
  fetchCoordsError,
  fetchDataFromCoords,
  fetchDataFromCoordsSuccess,
  fetchDataFromCoordsError,
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

export const fetchServiceData = async (service, ...args) => {
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

export const fetchDataFromCoordsApi = (latitude, longitude) => {
  return fetchServiceData(GEOCODEXYZ, latitude, longitude)
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
    yield put(fetchDataFromCoordsSuccess(response))
  } catch (error) {
    yield put(fetchDataFromCoordsError())
  }
}

function * setLocationParams () {
  yield * fetchCoordsSaga()
  const { latitude, longitude } = yield select(state => state.location.coords)
  yield * fetchDataFromCoordsSaga(fetchDataFromCoords({ latitude, longitude }))
  const city = yield select(state => state.location.data.region)
  yield put(setLocationData({ latitude, longitude, city }))
}

function * watchSetLocationParams () {
  yield takeEvery(SET_LOCATION_PARAMS, setLocationParams)
}

export default function * () {
  yield all([watchSetLocationParams()])
}
