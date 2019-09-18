import React from 'react'
import PropTypes from 'prop-types'

import Wrapper, {
  WeatherImage,
  WeatherInfoWrapper,
  Temperature,
  WeatherDescription,
} from './styles'

const WeatherWidget = ({ temperature, weather, weatherImageSrc }) => (
  <Wrapper>
    <WeatherInfoWrapper>
      <Temperature>{temperature} &#176; c</Temperature>
      <WeatherDescription>{weather}</WeatherDescription>
    </WeatherInfoWrapper>
    <WeatherImage src={weatherImageSrc} alt={weather} />
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
