import { combineReducers } from 'redux'
import services from '@/reducer/services'

export default combineReducers({
  services,
})

// state = {
//   services: {
//     all: [
//       {
//         id: OPEN_WEATHER,
//         name: 'Open Weather',
//       },
//       {
//         id: APIXU,
//         name: 'APIXU',
//       },
//     ],
//     current: 'OPEN_WEATHER',
//   },
//   location: {
//     city: '',
//     coords: {
//       longitude: 0,
//       latitude: 0,
//     },
//     temperature: 0,
//     weather: '',
//   },
//   date: 1568032519075,
// }
