import React from 'react'
import PropTypes from 'prop-types'

import Header from '@/components/blocks/global/Header'

const StandardLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)

StandardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
}

export default StandardLayout
