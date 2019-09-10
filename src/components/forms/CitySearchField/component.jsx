import React from 'react'
import PropTypes from 'prop-types'

import CitySearchInput from '@/components/forms/CitySearchInput'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import { getGeolocationData } from '@/utils/services'
import Wrapper from './styles'

const CitySearchField = ({ city, setCoords }) => {
  const handleFindCityClick = () => {
    getGeolocationData().then(
      responseData => {
        setCoords({
          longitude: responseData.geoObjects.position[0],
          latitude: responseData.geoObjects.position[1],
        })
      },
      error => console.log('error', error) // @todo
    )
  }

  return (
    <Wrapper>
      <label htmlFor="city">Your City:</label>
      <CitySearchInput />
      <SecondaryButton icon="search" onClick={handleFindCityClick}>
        Find your city
      </SecondaryButton>
      {city && (
        <p>
          Your selected city: <b>{city}</b>
        </p>
      )}
    </Wrapper>
  )
}

CitySearchField.propTypes = {
  city: PropTypes.string,
  setCoords: PropTypes.func.isRequired,
}

export default CitySearchField
