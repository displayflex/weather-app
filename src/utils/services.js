import { URL_YANDEX, URL_APIXU, URL_OPENWEATHER } from '@/constants/endpoints'
import { APIXU, OPEN_WEATHER, YANDEX } from '@/constants/services'

export const getGeolocationData = () => {
  return new Promise((resolve, reject) => {
    // @todo reject?
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
          err => console.log('error', err) // @todo what is here??
        )
    })
  })
}

export const buildApixuUrl = (latitude, longitude) => {
  const apikey = process.env.REACT_APP_API_KEY_APIXU

  return [`${URL_APIXU}/v1/current.json`, `?key=${apikey}`, `&q=${latitude}`, `,${longitude}`].join(
    ''
  )
}

export const buildOpenWeatherUrl = (latitude, longitude) => {
  const apikey = process.env.REACT_APP_API_KEY_OPENWEATHER

  return [
    `${URL_OPENWEATHER}/data/2.5/weather`,
    `?lat=${latitude}`,
    `&lon=${longitude}`,
    `&appid=${apikey}`,
  ].join('')
}

export const buildYandexUrl = () => {
  const apikey = process.env.REACT_APP_API_KEY_YANDEX

  return `${URL_YANDEX}/2.1/?lang=en_RU&amp;apikey=${apikey}`
}

export const getServiceUrl = (service, latitude = '', longitude = '') => {
  switch (service) {
    case APIXU:
      return buildApixuUrl(latitude, longitude)

    case OPEN_WEATHER:
      return buildOpenWeatherUrl(latitude, longitude)

    case YANDEX:
      return buildYandexUrl()

    default:
      return null
  }
}

export const fetchServiceData = async (service, latitude = '', longitude = '') => {
  const url = getServiceUrl(service, latitude, longitude)

  if (!url) {
    throw new Error('Service is not defined')
  }

  try {
    const data = await (await fetch(url)).json()

    return data
  } catch (error) {
    // @todo + remove console.log
    console.log(error.message)
  }
}

export const loadYandexScript = (onDone, onError) => {
  const script = document.createElement('script')
  script.onload = onDone
  script.onerror = onError
  script.src = getServiceUrl(YANDEX)

  document.head.appendChild(script)
}
