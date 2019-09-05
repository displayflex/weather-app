import React from 'react'

import ServiceSelectField from './styles'

export default () => (
  <ServiceSelectField>
    <label htmlFor="service_select">Weather Service:</label>
    <select id="service_select">
      <option>Open Weather</option>
      <option>APIXU</option>
    </select>
  </ServiceSelectField>
)
