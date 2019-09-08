import { URL_YANDEX, URL_APIXU, URL_OPENWEATHER } from '@/constants/endpoints'

export const loadYandexScript = (onDone, onError) => {
  const apikey = process.env.API_KEY_YANDEX
  const script = document.createElement('script')
  script.onload = onDone
  script.onerror = onError
  script.src = `${URL_YANDEX}/2.1/?lang=en_RU&amp;apikey=${apikey}`

  document.head.appendChild(script)
}

export const getGeolocationData = () => {
  window.ymaps.ready(() => {
    window.ymaps.geolocation
      .get({
        provider: 'auto',
        autoReverseGeocode: false,
      })
      .then(
        result => {
          const resultData = {
            latitude: result.geoObjects.position[0],
            longitude: result.geoObjects.position[1],
            // city: result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.text,
          }

          // console.log(
          //   result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.city.Address
          // )
          console.log(resultData)

          return resultData
        },
        err => console.log('error', err) // @todo what is here??
      )
  })
}

export const fetchApixuData = (latitude, longitude) => {
  const apikey = process.env.API_KEY_APIXU

  fetch(`${URL_APIXU}/v1/current.json?key=${apikey}&q=${latitude},${longitude}`)
    .then(response => response.json())
    .then(json => console.log('APIXU', json))
}

export const fetchOpenWeatherData = (latitude, longitude) => {
  const apikey = process.env.API_KEY_OPENWEATHER

  fetch(`${URL_OPENWEATHER}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
    .then(response => response.json())
    .then(json => console.log('OPEN WEATHER', json))
}
