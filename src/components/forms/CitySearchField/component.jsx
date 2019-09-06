import React from 'react'

import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import CitySearchField from './styles'

export default () => (
  <CitySearchField>
    <label htmlFor="city">Your City:</label>
    <input type="text" id="city" />
    <SecondaryButton>Find your city</SecondaryButton>
  </CitySearchField>
)
