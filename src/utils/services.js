import {
  URL_YANDEX_API,
  URL_OPENWEATHER,
  URL_OPENWEATHER_API,
  URL_WEATHERSTACK_API,
  URL_GEOCODEXYZ,
} from '@/constants/endpoints'
import { YANDEX, OPEN_WEATHER, WEATHERSTACK, GEOCODEXYZ } from '@/constants/services'

export const getServiceUrl = (service, ...args) => {
  let apikey
  let latitude
  let longitude
  let cityName

  if (args.length === 2) {
    [latitude, longitude] = args
  } else if (args.length === 1) {
    [cityName] = args
  }

  switch (service) {
    case WEATHERSTACK:
      apikey = process.env.REACT_APP_API_KEY_WEATHERSTACK

      return [
        `${URL_WEATHERSTACK_API}/current`,
        `?access_key=${apikey}`,
        `&query=${latitude},${longitude}`,
      ].join('')

    case OPEN_WEATHER:
      apikey = process.env.REACT_APP_API_KEY_OPENWEATHER

      return [
        `${URL_OPENWEATHER_API}/data/2.5/weather`,
        `?lat=${latitude}`,
        `&lon=${longitude}`,
        '&units=metric',
        `&appid=${apikey}`,
      ].join('')

    case YANDEX:
      apikey = process.env.REACT_APP_API_KEY_YANDEX

      return `${URL_YANDEX_API}/2.1/?lang=en_RU&amp;apikey=${apikey}`

    case GEOCODEXYZ:
      /**
       * apikey = process.env.REACT_APP_API_KEY_GEOCODEXYZ
       * Add &auth=${apikey} to the end of url to authorize.
       */
      if (cityName) {
        return `${URL_GEOCODEXYZ}/${cityName}?json=1`
      }

      return `${URL_GEOCODEXYZ}/${latitude},${longitude}?json=1`

    default:
      return null
  }
}

const mapOpenWeatherDataToImageUrl = data => {
  const iconId = data.weather[0].icon
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

const mapWeatherStackDataToImageUrl = data => {
  const [currentWeather] = data.current.weather_descriptions
  const weatherList = {
    Sunny: 'day',
    Clear: 'night',
    Clouds: 'cloudy',
    Overcast: 'cloudy',
    Moderate: 'rainy-7',
    Rain: 'rainy-5',
    Mist: 'rainy-4',
    'Rain Shower': 'rainy-7',
    'Partly cloudy': 'cloudy-day-1',
    'Light Rain Shower': 'rainy-4',
    'Light Rain': 'rainy-4',
    'Light Rain Shower, Rain Shower': 'rainy-4',
    'Moderate or heavy rain shower': 'rainy-7',
    'Heavy rain shower': 'rainy-7',
    'Light Rain With Thunderstorm': 'thunder',
    'Light Drizzle, Mist': 'rainy-4',
    'Light Drizzle': 'rainy-4',
  }

  const commonWeatherList = {
    sun: 'day',
    cloud: 'cloudy',
    rain: 'rainy-5',
    thunder: 'thunder',
    snow: 'snowy-5',
  }

  if (currentWeather in weatherList) {
    return `/icons/${weatherList[currentWeather]}.svg`
  }

  const weatherName = Object.keys(commonWeatherList).find(it => currentWeather.indexOf(it) !== -1)

  if (weatherName) {
    return `/icons/${commonWeatherList[weatherName]}.svg`
  }

  return data.current.weather_icons[0]
}

const isRecievedDataInvalid = (service, data) => {
  switch (service) {
    case OPEN_WEATHER:
      if ('cod' in data && data.cod === '400') {
        return true
      } else if ('name' in data && data.name === 'Earth') {
        return true
      } else if (
        'coord' in data &&
        'lat' in data.coord &&
        'lon' in data.coord &&
        data.coord.lat === 0 &&
        data.coord.lon === 0
      ) {
        return true
      }

      return false

    case WEATHERSTACK:
      if ('success' in data && !data.success) {
        return true
      } else if (
        'location' in data &&
        'country' in data.location &&
        'lat' in data.location &&
        'lon' in data.location &&
        !data.location.coutry &&
        !data.location.lat &&
        !data.location.lon
      ) {
        return true
      }

      return false

    default:
      return false
  }
}

export const mapServiceData = (service, data) => {
  if (isRecievedDataInvalid(service, data)) {
    return {
      temperature: null,
      weather: '',
      weatherImageSrc: '',
    }
  }

  switch (service) {
    case OPEN_WEATHER:
      return {
        temperature: data.main.temp.toFixed(1),
        weather: data.weather[0].main,
        weatherImageSrc: mapOpenWeatherDataToImageUrl(data),
      }

    case WEATHERSTACK:
      return {
        temperature: data.current.temperature.toFixed(1),
        weather: data.current.weather_descriptions[0],
        weatherImageSrc: mapWeatherStackDataToImageUrl(data),
      }

    default:
      break
  }
}
