import { URL_YANDEX, URL_APIXU, URL_OPENWEATHER } from '@/constants/endpoints'
import { APIXU, OPEN_WEATHER, YANDEX, GEOCODEXYZ } from '@/constants/services'

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
    case APIXU:
      apikey = process.env.REACT_APP_API_KEY_APIXU

      return [
        `${URL_APIXU}/v1/current.json`,
        `?key=${apikey}`,
        `&q=${args[0]}`,
        `,${args[1]}`,
      ].join('')

    case OPEN_WEATHER:
      apikey = process.env.REACT_APP_API_KEY_OPENWEATHER

      return [
        `${URL_OPENWEATHER}/data/2.5/weather`,
        `?lat=${args[0]}`,
        `&lon=${args[1]}`,
        `&appid=${apikey}`,
      ].join('')

    case YANDEX:
      apikey = process.env.REACT_APP_API_KEY_YANDEX

      return `${URL_YANDEX}/2.1/?lang=en_RU&amp;apikey=${apikey}`

    case GEOCODEXYZ:
      if (args.length === 2) {
        return `https://geocode.xyz/${args[0]},${args[1]}?json=1`
      } else if (args.length === 1) {
        return `https://geocode.xyz/${args[0]}?json=1`
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
