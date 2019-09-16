import { call, put, all, takeEvery } from 'redux-saga/effects'

import { getServiceUrl } from '@/utils/services'
import { YANDEX } from '@/constants'

const fetchGeolocationDataApi = () => {
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

function * fetchGeolocationData () {
  const script = document.createElement('script')

  try {
    script.src = getServiceUrl(YANDEX)
    yield document.head.appendChild(script)
    script.onload = yield put({ type: 'YANDEX_SCRIPT_LOADED' })
  } catch (error) {
    script.onerror = yield put({ type: 'YANDEX_SCRIPT_LOAD_FAILED', error }) // to actions???
  }

console.log(window.ymaps)
  const { response, error } = yield call(fetchGeolocationDataApi)

  if (response) {
    console.log(response)
    yield put({ type: 'GEOLOCATION_DATA_RECEIVED', data: response })
  } else {
    yield put({ type: 'GEOLOCATION_DATA_REQUEST_FAILED', error }) // @todo error?
  }
}

function * watchGetGeolocationData () {
  yield takeEvery('GET_GEOLOCATION_DATA', fetchGeolocationData)
}

function * loadYandexScript () {
  const script = document.createElement('script')

  try {
    script.src = getServiceUrl(YANDEX)
    yield document.head.appendChild(script)
    script.onload = yield put({ type: 'YANDEX_SCRIPT_LOADED' })
  } catch (error) {
    script.onerror = yield put({ type: 'YANDEX_SCRIPT_LOAD_FAILED', error }) // to actions???
  }
}

function * watchLoadYandexScript () {
  yield takeEvery('LOAD_YANDEX_SCRIPT', fetchGeolocationData)
}

// @todo constants

export default function * () {
  yield all([
    fetchGeolocationData(),
    watchGetGeolocationData(),
    loadYandexScript(),
    watchLoadYandexScript(),
  ])
}
