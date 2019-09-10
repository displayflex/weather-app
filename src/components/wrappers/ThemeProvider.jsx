import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme'

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

ThemeProviderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
}

export default ThemeProviderWrapper
