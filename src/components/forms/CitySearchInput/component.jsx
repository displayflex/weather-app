import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Input from './styles'

const CitySearchInput = ({ cityName, changeCityInput }) => {
  const inputEl = useRef(null)
  useEffect(() => {
    changeCityInput(inputEl.current.input.value)
  })

  const handleInputChange = evt => {
    changeCityInput(evt.target.value)
  }

  return (
    <Input
      ref={inputEl}
      placeholder="Type your city here..."
      onChange={handleInputChange}
      defaultValue={cityName} />
  )
}

CitySearchInput.propTypes = {
  cityName: PropTypes.string,
  changeCityInput: PropTypes.func.isRequired,
}

export default CitySearchInput
