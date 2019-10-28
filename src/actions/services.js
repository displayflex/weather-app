import { CHANGE_SERVICE, SET_SERVICE_DATA } from '@/constants/actions'

export const changeService = payload => ({
  payload,
  type: CHANGE_SERVICE,
})

export const setServiceData = payload => ({
  payload,
  type: SET_SERVICE_DATA,
})
