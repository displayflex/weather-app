import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Loader from '@/components/blocks/global/Loader'

import Form from './styles'

const SetupPanel = ({ cityName, cityInputValue, setWeatherData }) => {
  const [isLoading, switchIsLoading] = useState(false)

  const handleResultButtonClick = evt => {
    evt.preventDefault()

    if (!cityName || !cityInputValue) {
      return
    }

    switchIsLoading(true)

    if (cityInputValue !== cityName) {
      setWeatherData(cityInputValue)
    } else if (cityName) {
      setWeatherData()
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Form onSubmit={handleResultButtonClick}>
      <CitySearchField />
      <ServiceSelectField />
      <PrimaryButton
        icon="cloud-upload"
        onClick={handleResultButtonClick}
        disabled={!cityInputValue}
      >
        Show weather
      </PrimaryButton>
    </Form>
  )
}

SetupPanel.propTypes = {
  cityName: PropTypes.string,
  cityInputValue: PropTypes.string,
  setWeatherData: PropTypes.func.isRequired,
}

export default SetupPanel
