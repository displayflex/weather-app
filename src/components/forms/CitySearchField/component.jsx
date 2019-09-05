import React from 'react'

import SecondaryButton from '@/components/base/SecondaryButton'
import CitySearchField from './styles'

export default () => (
  <CitySearchField>
    <label htmlFor="city">Your City:</label>
    <input type="text" id="city" />
    <SecondaryButton>Find your city</SecondaryButton>
  </CitySearchField>
)
