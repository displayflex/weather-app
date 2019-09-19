import React from 'react'
import PropTypes from 'prop-types'

import Header from './styles'

const CityLabel = ({ cityName }) => <Header>{cityName}</Header>

CityLabel.propTypes = {
  cityName: PropTypes.string,
}

export default CityLabel
