import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'

import Input from './styles'

const CitySearchInput = ({ cityName, changeCityInput }) => {
  const [inputValue, setInputValue] = useState(cityName || '')
  useEffect(() => {
    changeCityInput(inputValue)
  })

  const handleInputChange = evt => {
    setInputValue(evt.target.value)
  }

  return (
    <DebounceInput
      element={Input}
      debounceTimeout={300}
      placeholder="Type your city here..."
      onChange={handleInputChange}
      defaultValue={cityName}
      value={inputValue} />
  )
}

CitySearchInput.propTypes = {
  cityName: PropTypes.string,
  changeCityInput: PropTypes.func.isRequired,
}

export default CitySearchInput
