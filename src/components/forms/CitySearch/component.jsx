import React from 'react'

import CitySearch from './styles'

export default () => (
  <CitySearch>
    <label htmlFor="city_search">Your City:</label>
    <input type="text" id="city_search" />
    <button type="button">Find your city</button>
  </CitySearch>
)
