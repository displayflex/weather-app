import { call, put, select, takeEvery } from 'redux-saga/effects'

import {
  fetchCoordsError,
  fetchCoordsSuccess,
  fetchDataError,
  fetchDataFromCoords,
  fetchDataSuccess,
  setLocationData,
} from '@/actions/location'
import { GEOCODEXYZ, SET_LOCATION_PARAMS } from '@/constants'
import { fetchServiceData } from '.'

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
  const cityName = yield select(state => state.location.data.region)
  yield put(setLocationData({ latitude, longitude, cityName }))
}

function * watchSetLocationParams () {
  yield takeEvery(SET_LOCATION_PARAMS, setLocationParamsSaga)
}

export default watchSetLocationParams
