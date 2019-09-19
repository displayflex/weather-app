import { takeEvery, select } from 'redux-saga/effects'
import localforage from 'localforage'

import { SET_DATA_TO_STORAGE } from '@/constants'

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

function * watchSetDataToStorage () {
  yield takeEvery(SET_DATA_TO_STORAGE, setDataToStorageSaga)
}

export default watchSetDataToStorage
