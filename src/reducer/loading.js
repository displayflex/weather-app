import { TURN_ON_IS_LOADING, TURN_OFF_IS_LOADING } from '@/constants/actions'

const initialState = {
  isLoading: false,
}

const location = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_IS_LOADING:
      return {
        isLoading: true,
      }
    case TURN_OFF_IS_LOADING:
      return {
        isLoading: false,
      }

    default:
      return state
  }
}

export default location
