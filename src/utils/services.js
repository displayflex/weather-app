import {
  URL_YANDEX_API,
  URL_OPENWEATHER,
  URL_OPENWEATHER_API,
  URL_WEATHERSTACK_API,
  URL_LOCATIONIQ_API,
  URL_WEATHERBIT_API,
  URL_WEATHERBIT,
} from '@/constants/endpoints'
import { YANDEX, OPEN_WEATHER, WEATHERSTACK, LOCATIONIQ, WEATHERBIT } from '@/constants/services'

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

    case WEATHERBIT:
      apikey = process.env.REACT_APP_API_KEY_WEATHERBIT

      return [
        `${URL_WEATHERBIT_API}/current`,
        `?key=${apikey}`,
        '&lang=en',
        `&lat=${latitude}`,
        `&lon=${longitude}`,
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

    case LOCATIONIQ:
      apikey = process.env.REACT_APP_API_KEY_LOCATIONIQ

      if (cityName) {
        return [
          `${URL_LOCATIONIQ_API}/v1/search.php`,
          `?key=${apikey}`,
          `&city=${cityName}`,
          '&format=json',
          '&accept-language=en',
        ].join('')
      }

      return [
        `${URL_LOCATIONIQ_API}/v1/reverse.php`,
        `?key=${apikey}`,
        `&lat=${latitude}`,
        `&lon=${longitude}`,
        '&format=json',
        '&accept-language=en',
      ].join('')

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

const mapWeatherbitDataToImageUrl = data => {
  const weatherCode = data.data[0].weather.code
  const iconId = data.data[0].weather.icon

  const codeList = {
    200: 'thunder',
    201: 'thunder',
    202: 'thunder',
    230: 'thunder',
    231: 'thunder',
    232: 'thunder',
    233: 'thunder',
    300: 'rainy-4',
    301: 'rainy-5',
    302: 'rainy-6',
    500: 'rainy-5',
    501: 'rainy-6',
    502: 'rainy-7',
    511: 'rainy-6',
    520: 'rainy-5',
    521: 'rainy-6',
    522: 'rainy-7',
    600: 'snowy-4',
    601: 'snowy-5',
    602: 'snowy-6',
    610: 'snowy-5',
    611: 'snowy-4',
    612: 'snowy-5',
    621: 'snowy-6',
    622: 'snowy-6',
    623: 'snowy-6',
    700: 'cloudy',
    711: 'cloudy',
    721: 'cloudy',
    731: 'cloudy',
    741: 'cloudy',
    751: 'cloudy',
    800: 'day',
    801: 'cloudy-day-1',
    802: 'cloudy-day-2',
    803: 'cloudy-day-3',
    804: 'cloudy',
    900: 'rainy-6',
  }

  const iconList = {
    c01d: 'day',
    c01n: 'night',
    c02d: 'cloudy-day-1',
    c02n: 'cloudy-night-1',
    c03d: 'cloudy-day-3',
    c03n: 'cloudy-night-3',
    r05d: 'rainy-3',
    s01d: 'snowy-2',
    s04d: 'snowy-1',
  }

  if (iconId in iconList) {
    return `/icons/${iconList[iconId]}.svg`
  } else if (weatherCode in codeList) {
    return `/icons/${codeList[weatherCode]}.svg`
  }

  return `${URL_WEATHERBIT}/static/img/icons/${iconId}.png`
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

    case WEATHERBIT:
      if ('error' in data) {
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
        pressure: data.main.pressure.toFixed(0),
        wind: data.wind.speed.toFixed(0),
        humidity: data.main.humidity.toFixed(0),
      }

    case WEATHERSTACK:
      return {
        temperature: data.current.temperature.toFixed(1),
        weather: data.current.weather_descriptions[0],
        weatherImageSrc: mapWeatherStackDataToImageUrl(data),
      }

    case WEATHERBIT:
      return {
        temperature: data.data[0].app_temp.toFixed(1),
        weather: data.data[0].weather.description,
        weatherImageSrc: mapWeatherbitDataToImageUrl(data),
        pressure: data.data[0].pres.toFixed(0),
        wind: data.data[0].wind_spd.toFixed(0),
        humidity: data.data[0].rh.toFixed(0),
      }

    default:
      break
  }
}
