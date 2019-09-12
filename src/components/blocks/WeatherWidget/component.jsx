import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './styles'

const WeatherWidget = ({ temperature, weather, weatherImageSrc }) => (
  <Wrapper>
    <div>
      <b>{temperature} &#176; c</b>
      <span>{weather}</span>
    </div>
    <img src={weatherImageSrc} alt={weather} />
  </Wrapper>
)

WeatherWidget.propTypes = {
  temperature: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  weather: PropTypes.string.isRequired,
  weatherImageSrc: PropTypes.string,
}

export default WeatherWidget
