import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Loader from '@/components/blocks/global/Loader'
import { getCoordsFromCityName, fetchServiceData, mapServiceData } from '@/utils/services'
import { WEATHER_PAGE_PATH } from '@/constants/paths'
import Form from './styles'

const SetupPanel = ({
  service,
  city,
  latitude,
  longitude,
  cityInputValue,
  setLocationData,
  setWeatherData,
}) => {
  const [isLoading, switchIsLoading] = useState(false)
  const [isDataRecieved, switchIsDataRecieved] = useState(false)

  const handleResultButtonClick = evt => {
    evt.preventDefault()

    if (!city) {
      return
    }

    switchIsLoading(prevIsLoading => !prevIsLoading)

    if (cityInputValue && cityInputValue !== city) {
      getCoordsFromCityName(cityInputValue).then(responseData => {
        const latitude = responseData.latt
        const longitude = responseData.longt

        setLocationData({
          latitude,
          longitude,
          city: cityInputValue,
        })

        // @todo .then in .then ??
        fetchServiceData(service, latitude, longitude).then(data => {
          setWeatherData(mapServiceData(service, data))
          switchIsDataRecieved(prevIsDataRecieved => !prevIsDataRecieved)
        })
      })
    } else if (city) {
      // @todo get rid of code repeat?
      fetchServiceData(service, latitude, longitude).then(data => {
        setWeatherData(mapServiceData(service, data))
        switchIsDataRecieved(prevIsDataRecieved => !prevIsDataRecieved)
      })
    }
  }

  if (isLoading && !isDataRecieved) {
    return <Loader />
  }

  if (isDataRecieved) {
    return <Redirect to={WEATHER_PAGE_PATH} />
  }

  return (
    <Form onSubmit={handleResultButtonClick}>
      <CitySearchField />
      <ServiceSelectField />
      <PrimaryButton icon="cloud-upload" onClick={handleResultButtonClick} disabled={!city}>
        Show weather
      </PrimaryButton>
    </Form>
  )
}

SetupPanel.propTypes = {
  service: PropTypes.string.isRequired,
  city: PropTypes.string,
  cityInputValue: PropTypes.string,
  latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setLocationData: PropTypes.func.isRequired,
  setWeatherData: PropTypes.func.isRequired,
}

export default SetupPanel
