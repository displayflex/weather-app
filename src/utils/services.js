import { URL_YANDEX, URL_APIXU, URL_OPENWEATHER } from '@/constants/endpoints'
import { APIXU, OPEN_WEATHER, YANDEX } from '@/constants/services'

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

const buildServiceUrl = (service, latitude, longitude) => {
  let apikey

  switch (service) {
    case APIXU:
      apikey = process.env.REACT_APP_API_KEY_APIXU

      return [
        `${URL_APIXU}/v1/current.json`,
        `?key=${apikey}`,
        `&q=${latitude}`,
        `,${longitude}`,
      ].join('')

    case OPEN_WEATHER:
      apikey = process.env.REACT_APP_API_KEY_OPENWEATHER

      return [
        `${URL_OPENWEATHER}/data/2.5/weather`,
        `?lat=${latitude}`,
        `&lon=${longitude}`,
        `&appid=${apikey}`,
      ].join('')

    case YANDEX:
      apikey = process.env.REACT_APP_API_KEY_YANDEX

      return `${URL_YANDEX}/2.1/?lang=en_RU&amp;apikey=${apikey}`

    default:
      return null
  }
}

export const getServiceUrl = (service, latitude, longitude) => {
  switch (service) {
    case APIXU:
      return buildServiceUrl(APIXU, latitude, longitude)

    case OPEN_WEATHER:
      return buildServiceUrl(OPEN_WEATHER, latitude, longitude)

    case YANDEX:
      return buildServiceUrl(YANDEX)

    default:
      return null
  }
}

export const fetchServiceData = async (service, latitude, longitude) => {
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

export const getDataFromCoords = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export const getCoordsFromCityName = city => {
  return new Promise((resolve, reject) => {
    fetch(`https://geocode.xyz/${city}?json=1`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}
