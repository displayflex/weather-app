import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Input from './styles'

const CitySearchInput = ({ city, setCityInputValue }) => {
  // @todo
  // useEffect(() => {
  //   setCityInputValue(...Ref)
  // })

  const handleInputChange = event => {
    setCityInputValue(event.target.value)
  }

  return (
    <Input placeholder="Type your city here..." onChange={handleInputChange} defaultValue={city} />
  )
}

CitySearchInput.propTypes = {
  city: PropTypes.string,
  setCityInputValue: PropTypes.func.isRequired,
}

export default CitySearchInput
