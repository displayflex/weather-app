import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './styles'
import Select from '@/components/blocks/global/Select'

const ServiceSelectField = ({ services }) => {
  const { Option } = Select

  if (services.length === 0) {
    return <p>There are no services</p>
  }

  return (
    <Wrapper>
      <label htmlFor="service">Weather Service:</label>
      <Select id="service" defaultValue={services[0].id}>
        {services.map(service => (
          <Option key={service.id} value={service.id}>
            {service.name}
          </Option>
        ))}
      </Select>
    </Wrapper>
  )
}

ServiceSelectField.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ServiceSelectField
