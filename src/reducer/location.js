import { SET_COORDS } from '@/constants/actions'

const initialState = {
  city: '',
  coords: {
    longitude: null,
    latitude: null,
  },
  temperature: null,
  weather: '',
}

const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_COORDS:
      return {
        ...state,
        coords: {
          ...state.coords,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
        },
      }

    default:
      return state
  }
}

export default location
