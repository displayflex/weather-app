import { CHANGE_SERVICE } from '@/constants/actions'

export const changeService = payload => ({
  payload,
  type: CHANGE_SERVICE,
})

export const loadYandexScript = () => ({
  type: 'LOAD_YANDEX_SCRIPT', // @todo constants
})

export const getGeolocationData = () => ({
  type: 'GET_GEOLOCATION_DATA', // @todo constants
})
