import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import Wrapper from './styles'

const ErrorParagraph = ({ message }) => {
  return (
    <Wrapper>
      <Icon type="warning" /> {message}
    </Wrapper>
  )
}

ErrorParagraph.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorParagraph
