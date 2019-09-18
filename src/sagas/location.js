import { put, takeEvery, select, call } from 'redux-saga/effects'

import {
  setLocationData,
  fetchCoordsSuccess,
  fetchCoordsError,
  fetchDataSuccess,
  fetchDataError,
  fetchDataFromCoords,
} from '@/actions/location'
import { fetchServiceData } from '.'
import { SET_LOCATION_PARAMS, GEOCODEXYZ } from '@/constants'

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

const fetchDataFromCoordsApi = (latitude, longitude) => {
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

function * watchSetLocationParams () {
  yield takeEvery(SET_LOCATION_PARAMS, setLocationParamsSaga)
}

export default watchSetLocationParams
