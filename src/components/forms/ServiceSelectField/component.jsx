import React from 'react'
import PropTypes from 'prop-types'

import Select from '@/components/blocks/global/Select'
import allServices from '@/services.json'
import Wrapper from './styles'

const ServiceSelectField = ({ currentService, changeService }) => {
  const { Option } = Select

  const handleServiceChange = value => {
    changeService({ id: value })
  }

  if (allServices.length === 0) {
    return <p>There are no services</p>
  }

  return (
    <Wrapper>
      <label htmlFor="service">Weather Service:</label>
      <Select
        id="service"
        defaultValue={currentService || allServices[0].id}
        onChange={value => handleServiceChange(value)}
      >
        {allServices.map(service => (
          <Option key={service.id} value={service.id}>
            {service.name}
          </Option>
        ))}
      </Select>
    </Wrapper>
  )
}

ServiceSelectField.propTypes = {
  currentService: PropTypes.string,
  changeService: PropTypes.func.isRequired,
}

export default ServiceSelectField
