import React from 'react'

import CitySearchInput from '@/components/forms/CitySearchInput'
import Wrapper, { CitySearchLabel } from './styles'

const CitySearchField = () => (
  <Wrapper>
    <CitySearchLabel htmlFor="city">Your City:</CitySearchLabel>
    <CitySearchInput />
  </Wrapper>
)

export default CitySearchField
