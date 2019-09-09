import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import { getStore } from '@/store'
import Loader from '@/components/blocks/global/Loader'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import { loadYandexScript } from '@/utils/services'

class App extends Component {
  state = {
    isScriptLoading: true,
    isScriptLoadedWithError: false,
  }

  componentDidMount () {
    const scriptSuccesLoadHandler = () => {
      this.setState({ isScriptLoading: false })
    }

    const scriptErrorLoadHandler = () => {
      this.setState({ isScriptLoadedWithError: true })
    }

    loadYandexScript(scriptSuccesLoadHandler, scriptErrorLoadHandler)
  }

  render () {
    if (this.state.isScriptLoadedWithError) {
      return <p>Something went wrong</p> // @todo
    }

    return (
      <Provider store={getStore()}>
        <ThemeProviderWrapper>
          {this.state.isScriptLoading ? <Loader /> : <Router />}
        </ThemeProviderWrapper>
      </Provider>
    )
  }
}

export default App
