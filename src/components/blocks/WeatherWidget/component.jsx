import React from 'react'
import PropTypes from 'prop-types'

const WeatherWidget = ({ temperature, weather, weatherImageSrc }) => (
  <div>
    <b>
      {temperature} <sup>o</sup> c
    </b>
    <span>{weather}</span>
    <img src={weatherImageSrc} alt={weather} />
  </div>
)

WeatherWidget.propTypes = {
  temperature: PropTypes.string,
  weather: PropTypes.string,
  weatherImageSrc: PropTypes.string,
}

export default WeatherWidget
