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

// @todo recieve full data, not only iconId?
export const mapOpenWeatherImageUrl = iconId => {
  // @todo name?
  const iconList = {
    '01d': 'day',
    '01n': 'night',
    '02d': 'cloudy-day-1',
    '02n': 'cloudy-night-1',
    '03d': 'cloudy',
    '03n': 'cloudy',
    '04d': 'cloudy',
    '04n': 'cloudy',
    '09d': 'rainy-7',
    '09n': 'rainy-7',
    '10d': 'rainy-5',
    '10n': 'rainy-5',
    '11d': 'thunder',
    '11n': 'thunder',
    '13d': 'snowy-5',
    '13n': 'snowy-5',
  }

  if (iconId in iconList) {
    return `/icons/${iconList[iconId]}.svg`
  }

  return `${URL_OPENWEATHER}/img/wn/${iconId}@2x.png`
}

export const mapWeatherStackImageUrl = data => {
  const [weather] = data.current.weather_descriptions
  // @todo name?
  const weatherList = {
    Sunny: 'day',
    Clear: 'night',
    Clouds: 'cloudy',
    Overcast: 'cloudy',
    Moderate: 'rainy-7',
    Rain: 'rainy-5',
    'Partly cloudy': 'cloudy-day-1',
    'Light Rain Shower': 'rainy-4',
    'Light Rain': 'rainy-4',
    'Moderate or heavy rain shower': 'rainy-7',
    'Heavy rain shower': 'rainy-7',
  }

  const commonWeatherList = {
    sun: 'day',
    cloud: 'cloudy',
    rain: 'rainy-5',
    thunder: 'thunder',
    snow: 'snowy-5',
  }

  if (weather in weatherList) {
    return `/icons/${weatherList[weather]}.svg`
  } else if (Object.keys(commonWeatherList).indexOf(weather.toLowerCase()) !== -1) {
    // @todo simplify it
    const index = Object.keys(commonWeatherList).indexOf(weather.toLowerCase())
    const key = commonWeatherList[index]

    return `/icons/${commonWeatherList[key]}.svg`
  }

  return data.current.weather_icons[0]
}

export const mapServiceData = (service, data) => {
  switch (service) {
    case OPEN_WEATHER:
      if (data.name === 'Earth' || (data.coord.lat === 0 && data.coord.lon === 0)) {
        return {
          temperature: null,
          weather: '',
          weatherImageSrc: '',
        }
      }

      return {
        temperature: data.main.temp.toFixed(1),
        weather: data.weather[0].main,
        weatherImageSrc: mapOpenWeatherImageUrl(data.weather[0].icon),
      }

    case WEATHERSTACK:
      if ('success' in data && !data.success) {
        return {
          temperature: null,
          weather: '',
          weatherImageSrc: '',
        }
      }

      return {
        temperature: data.current.temperature.toFixed(1),
        weather: data.current.weather_descriptions[0],
        weatherImageSrc: mapWeatherStackImageUrl(data),
      }

    default:
      break
  }
}
