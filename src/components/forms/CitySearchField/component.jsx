import React from 'react'

import CitySearchField from './styles'

export default () => (
  <CitySearchField>
    <label htmlFor="city_search">Your City:</label>
    <input type="text" id="city_search" />
    <button type="button">Find your city</button>
  </CitySearchField>
)
