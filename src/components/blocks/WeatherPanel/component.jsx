import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import CityLabel from '@/components/blocks/CityLabel'
import WeatherWidget from '@/components/blocks/WeatherWidget'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import { SETUP_PAGE_PATH } from '@/constants/paths'
import Wrapper from './styles'

const WeatherPanel = ({ temperature, weather }) => {
  let content

  if (!temperature && !weather) {
    content = (
      <p>
        <Icon type="warning" /> There is no data for your city. Try to change the setup.
      </p>
    )
  } else {
    content = (
      <>
        <CityLabel />
        <WeatherWidget />
      </>
    )
  }

  return (
    <Wrapper>
      {content}
      <Link to={SETUP_PAGE_PATH}>
        <SecondaryButton icon="setting">Change Setup</SecondaryButton>
      </Link>
    </Wrapper>
  )
}

WeatherPanel.propTypes = {
  temperature: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  weather: PropTypes.string,
}

export default WeatherPanel
