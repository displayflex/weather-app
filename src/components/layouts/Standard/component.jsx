import React from 'react'
import pt from 'prop-types'

import Header from '@/components/blocks/global/Header'

const StandardLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)

StandardLayout.propTypes = {
  children: pt.oneOfType([
    pt.string.isRequired,
    pt.element.isRequired,
  ]),
}

export default StandardLayout
