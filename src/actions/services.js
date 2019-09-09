// Put here basic action-creator functions or basic actions

import { CHANGE_SERVICE } from '@/constants'

export const changeService = payload => ({
  payload,
  type: CHANGE_SERVICE,
})
