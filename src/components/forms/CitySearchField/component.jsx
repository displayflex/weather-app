import React from 'react'
import PropTypes from 'prop-types'

import CitySearchInput from '@/components/forms/CitySearchInput'
import Wrapper from './styles'

const CitySearchField = ({ city }) => (
  <Wrapper>
    <label htmlFor="city">Your City:</label>
    <CitySearchInput />
    {city && (
      <p>
        Your current city is <b>{city}</b>
      </p>
    )}
  </Wrapper>
)

CitySearchField.propTypes = {
  city: PropTypes.string,
}

export default CitySearchField
