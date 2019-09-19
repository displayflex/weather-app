import { all } from 'redux-saga/effects'

import { getServiceUrl } from '@/utils/services'
import watchChangeCityInput from './input'
import watchSetLocationParams from './location'
import watchSetWeatherData from './weather'
import watchSetDataToStorage from './storage'

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
export default function * () {
  yield all([
    watchSetLocationParams(),
    watchChangeCityInput(),
    watchSetWeatherData(),
    watchSetDataToStorage(),
  ])
}
