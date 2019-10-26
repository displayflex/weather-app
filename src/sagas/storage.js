import { takeEvery, select, put } from 'redux-saga/effects'
import localforage from 'localforage'
import getHistory from 'react-router-global-history'

import { SET_DATA_TO_STORAGE, SHOW_STORAGED_RESULT, WEATHER_PAGE_PATH } from '@/constants'
import { setDataFromStorage } from '@/actions'

function * setDataToStorageSaga () {
  const { cityName, temperature, weather, weatherImageSrc } = yield select(state => state.location)
  const clientDate = Date.now()
  const clientData = {
    clientDate,
    cityName,
    temperature,
    weather,
    weatherImageSrc,
  }

  localforage.setItem('weatherAppData', clientData)
}

function * showStoragedResultSaga (action) {
  yield put(setDataFromStorage(action.payload.storageData))

  if (action.payload.withRedirect) {
    getHistory().push(WEATHER_PAGE_PATH)
  }
}

function * watchSetDataToStorage () {
  yield takeEvery(SET_DATA_TO_STORAGE, setDataToStorageSaga)
}

function * watchShowStoragedResult () {
  yield takeEvery(SHOW_STORAGED_RESULT, showStoragedResultSaga)
}

export { watchSetDataToStorage, watchShowStoragedResult }
