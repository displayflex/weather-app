import React from 'react'

import CitySearchInput from '@/components/forms/CitySearchInput'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import Wrapper from './styles'

const CitySearchField = () => (
  <Wrapper>
    <label htmlFor="city">Your City:</label>
    <CitySearchInput />
    <SecondaryButton icon="search">Find your city</SecondaryButton>
  </Wrapper>
)

export default CitySearchField
