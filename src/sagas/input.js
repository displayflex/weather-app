import { put, throttle } from 'redux-saga/effects'

import { setCityInputValue } from '@/actions/location'
import { CHANGE_CITY_INPUT } from '@/constants'

function * handleInputChangeSaga (action) {
  yield put(setCityInputValue(action.payload))
}

function * watchChangeCityInput () {
  yield throttle(500, CHANGE_CITY_INPUT, handleInputChangeSaga)
}

export default watchChangeCityInput
