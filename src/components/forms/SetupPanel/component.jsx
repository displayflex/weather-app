import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import localforage from 'localforage'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Loader from '@/components/blocks/global/Loader'
import { WEATHER_PAGE_PATH } from '@/constants/paths'
import { isCacheingTimeElapsed } from '@/utils/storage'
import Form from './styles'

const SetupPanel = ({
  cityName,
  cityInputValue,
  isWeatherDataSet,
  setWeatherData,
  resetIsWeatherDataSet,
  setDataFromStorage,
}) => {
  const [isLoading, switchIsLoading] = useState(false)

  useEffect(() => {
    resetIsWeatherDataSet()
  })

  useEffect(() => {
    localforage.getItem('weatherAppData', (err, storageData) => {
      if (err) {
        return
      }

      if (storageData && !isCacheingTimeElapsed(storageData.clientDate)) {
        setDataFromStorage(storageData)
      }
    })
  })

  const handleResultButtonClick = evt => {
    evt.preventDefault()

    if (!cityName || !cityInputValue) {
      return
    }

    switchIsLoading(prevIsLoading => !prevIsLoading)

    if (cityInputValue !== cityName) {
      setWeatherData(cityInputValue)
    } else if (cityName) {
      setWeatherData()
    }
  }

  if (isLoading && !isWeatherDataSet) {
    return <Loader />
  }

  if (isWeatherDataSet) {
    return <Redirect to={WEATHER_PAGE_PATH} />
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
  isWeatherDataSet: PropTypes.bool.isRequired,
  setWeatherData: PropTypes.func.isRequired,
  resetIsWeatherDataSet: PropTypes.func.isRequired,
  setDataFromStorage: PropTypes.func.isRequired,
}

export default SetupPanel
