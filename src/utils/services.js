import {
  URL_YANDEX_API,
  URL_OPENWEATHER,
  URL_OPENWEATHER_API,
  URL_WEATHERSTACK_API,
  URL_GEOCODEXYZ,
} from '@/constants/endpoints'
import { YANDEX, OPEN_WEATHER, WEATHERSTACK, GEOCODEXYZ } from '@/constants/services'

export const getGeolocationData = () => {
  return new Promise((resolve, reject) => {
    window.ymaps.ready(() => {
      window.ymaps.geolocation
        .get({
          provider: 'auto',
          autoReverseGeocode: false,
        })
        .then(
          result => {
            resolve(result)
          },
          error => reject(error)
        )
    })
  })
}

const getServiceUrl = (service, ...args) => {
  let apikey

  switch (service) {
    case WEATHERSTACK:
      apikey = process.env.REACT_APP_API_KEY_WEATHERSTACK

      return [
        `${URL_WEATHERSTACK_API}/current`,
        `?access_key=${apikey}`,
        `&query=${args[0]},${args[1]}`,
      ].join('')

    case OPEN_WEATHER:
      apikey = process.env.REACT_APP_API_KEY_OPENWEATHER

      return [
        `${URL_OPENWEATHER_API}/data/2.5/weather`,
        `?lat=${args[0]}`,
        `&lon=${args[1]}`,
        '&units=metric',
        `&appid=${apikey}`,
      ].join('')

    case YANDEX:
      apikey = process.env.REACT_APP_API_KEY_YANDEX

      return `${URL_YANDEX_API}/2.1/?lang=en_RU&amp;apikey=${apikey}`

    case GEOCODEXYZ:
      if (args.length === 2) {
        return `${URL_GEOCODEXYZ}/${args[0]},${args[1]}?json=1`
      } else if (args.length === 1) {
        return `${URL_GEOCODEXYZ}/${args[0]}?json=1`
      }
      break

    default:
      return null
  }
}

export const loadYandexScript = (onDone, onError) => {
  const script = document.createElement('script')
  script.onload = onDone
  script.onerror = onError
  script.src = getServiceUrl(YANDEX)

  document.head.appendChild(script)
}

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

export const getDataFromCoords = (latitude, longitude) => {
  return fetchServiceData(GEOCODEXYZ, latitude, longitude)
}

export const getCoordsFromCityName = city => {
  return fetchServiceData(GEOCODEXYZ, city)
}

export const mapServiceData = (service, data) => {
  switch (service) {
    case OPEN_WEATHER:
      return {
        temperature: Math.round(data.main.temp),
        weather: data.weather[0].main, // @todo try data.weather[0].description
        weatherImageSrc: `${URL_OPENWEATHER}/img/wn/${data.weather[0].icon}@2x.png`,
        // @todo add field "success"
      }

    case WEATHERSTACK:
      return {
        temperature: Math.round(data.current.temperature),
        weather: data.current.weather_descriptions[0],
        weatherImageSrc: data.current.weather_icons[0],
        // @todo add field "success"
      }

    default:
      break
  }
}
