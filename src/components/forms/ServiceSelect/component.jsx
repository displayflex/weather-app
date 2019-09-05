import React from 'react'

import ServiceSelect from './styles'

export default () => (
  <ServiceSelect>
    <label htmlFor="service_select">Weather Service:</label>
    <select id="service_select">
      <option>Open Weather</option>
      <option>APIXU</option>
    </select>
  </ServiceSelect>
)
