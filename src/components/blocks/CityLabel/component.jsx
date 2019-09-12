import React from 'react'
import PropTypes from 'prop-types'

import Header from './styles'

const CityLabel = ({ city }) => <Header>{city}</Header>

CityLabel.propTypes = {
  city: PropTypes.string,
}

export default CityLabel
