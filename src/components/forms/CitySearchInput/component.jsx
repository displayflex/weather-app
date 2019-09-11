import React from 'react'

import Input from './styles'

const CitySearchInput = ({ setCityInputValue }) => {
  const handleInputChange = event => {
    setCityInputValue(event.target.value)
  }

  return <Input placeholder="Type your city here..." onChange={handleInputChange} />
}

export default CitySearchInput
