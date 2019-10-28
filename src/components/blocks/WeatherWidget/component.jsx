import React from 'react'
import PropTypes from 'prop-types'

import Wrapper, {
  MainInfo,
  WeatherImage,
  WeatherInfoWrapper,
  Temperature,
  WeatherDescription,
  AdditionalInfoList,
  AdditionalInfoItem,
  AdditionalInfoHeader,
  AdditionalInfoIcon,
  AdditionalInfoRate,
} from './styles'

const WeatherWidget = props => {
  const {
    temperature,
    description: weatherDescription,
    weatherImageSrc,
    pressure,
    wind,
    humidity,
  } = props.weather

  return (
    <Wrapper>
      <MainInfo>
        <WeatherInfoWrapper>
          <Temperature>{temperature} &#176; c</Temperature>
          <WeatherDescription>{weatherDescription}</WeatherDescription>
        </WeatherInfoWrapper>
        <WeatherImage src={weatherImageSrc} alt={weatherDescription} />
      </MainInfo>

      <AdditionalInfoList>
        <AdditionalInfoItem>
          <AdditionalInfoHeader>Pressure, mmHg</AdditionalInfoHeader>
          <AdditionalInfoIcon type="dashboard" />
          <AdditionalInfoRate>{pressure}</AdditionalInfoRate>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <AdditionalInfoHeader>Wind, m/s</AdditionalInfoHeader>
          <AdditionalInfoIcon type="align-right" />
          <AdditionalInfoRate>{wind}</AdditionalInfoRate>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <AdditionalInfoHeader>Humidity, %</AdditionalInfoHeader>
          <AdditionalInfoIcon type="experiment" />
          <AdditionalInfoRate>{humidity}</AdditionalInfoRate>
        </AdditionalInfoItem>
      </AdditionalInfoList>
    </Wrapper>
  )
}

WeatherWidget.propTypes = {
  weather: PropTypes.shape({
    temperature: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    pressure: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    wind: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    humidity: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    description: PropTypes.string.isRequired,
    weatherImageSrc: PropTypes.string,
  }).isRequired,
}

export default WeatherWidget
