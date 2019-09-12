import React from 'react'

import CitySearchInput from '@/components/forms/CitySearchInput'
import Wrapper from './styles'

const CitySearchField = () => (
  <Wrapper>
    <label htmlFor="city">Your City:</label>
    <CitySearchInput />
  </Wrapper>
)

export default CitySearchField
