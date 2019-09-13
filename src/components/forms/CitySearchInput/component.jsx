import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Input from './styles'

const CitySearchInput = ({ city, setCityInputValue }) => {
  const inputEl = useRef(null)
  useEffect(() => {
    setCityInputValue(inputEl.current.input.value)
  })

  const handleInputChange = evt => {
    setCityInputValue(evt.target.value)
  }

  return (
    <Input
      ref={inputEl}
      placeholder="Type your city here..."
      onChange={handleInputChange}
      defaultValue={city} />
  )
}

CitySearchInput.propTypes = {
  city: PropTypes.string,
  setCityInputValue: PropTypes.func.isRequired,
}

export default CitySearchInput
