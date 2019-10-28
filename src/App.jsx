import React from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import StandardLayout from '@/components/layouts/Standard'

const App = () => {
  return (
    <Provider store={getStore()}>
      <ThemeProviderWrapper>
        <StandardLayout>
          <Router />
        </StandardLayout>
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App
