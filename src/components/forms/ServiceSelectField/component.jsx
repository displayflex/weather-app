import React from 'react'

import ServiceSelectField from './styles'
import Select from '@/components/base/Select'

export default ({ services }) => {
  const { Option } = Select

  return (
    <ServiceSelectField>
      <label htmlFor="service">Weather Service:</label>
      <Select id="service" defaultValue={services[0].id}>
        {services.map(service => (
          <Option key={service.id} value={service.id}>
            {service.name}
          </Option>
        ))}
      </Select>
    </ServiceSelectField>
  )
}
