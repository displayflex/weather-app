// Put here basic action-creator functions or basic actions

import { SET_COORDS } from '@/constants/actions'

export const setCoords = payload => ({
  payload,
  type: SET_COORDS,
})
