import React from 'react'
import PropTypes from 'prop-types'

import Select from '@/components/blocks/global/Select'
import Wrapper from './styles'

const ServiceSelectField = ({ services, currentService, changeService }) => {
  const { Option } = Select

  const handleServiceChange = value => {
    changeService({ id: value })
  }

  if (services.length === 0) {
    return <p>There are no services</p>
  }

  return (
    <Wrapper>
      <label htmlFor="service">Weather Service:</label>
      <Select
        id="service"
        defaultValue={currentService || services[0].id}
        onChange={value => handleServiceChange(value)}
      >
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
  currentService: PropTypes.string,
  changeService: PropTypes.func.isRequired,
}

export default ServiceSelectField
