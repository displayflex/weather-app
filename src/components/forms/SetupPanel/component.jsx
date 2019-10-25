import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import localforage from 'localforage'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Loader from '@/components/blocks/global/Loader'
import { isCacheingTimeElapsed } from '@/utils/storage'

import Form from './styles'

const SetupPanel = ({ cityName, cityInputValue, setWeatherData, showStoragedResult }) => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    localforage.getItem('weatherAppData', (err, storageData) => {
      console.log('STORAGE DATA', storageData)
      if (err) {
        return
      }

      if (storageData && !isCacheingTimeElapsed(storageData.clientDate)) {
        showStoragedResult(storageData)
      }
    })
  })

  const handleResultButtonClick = evt => {
    evt.preventDefault()

    if (!cityName || !cityInputValue) {
      return
    }

    setLoading(true)

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
  showStoragedResult: PropTypes.func.isRequired,
}

export default SetupPanel
