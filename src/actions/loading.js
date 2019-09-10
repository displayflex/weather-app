import { TURN_ON_IS_LOADING, TURN_OFF_IS_LOADING } from '@/constants/actions'

export const turnOnIsLoading = () => ({
  type: TURN_ON_IS_LOADING,
})

export const turnOffIsLoading = () => ({
  type: TURN_OFF_IS_LOADING,
})
