import React, { Component } from 'react'

import StandardLayout from '@/components/layouts/Standard'
import SetupPanel from '@/components/forms/SetupPanel'
import Loader from '@/components/blocks/global/Loader'
import { loadYandexScript } from '@/utils/services'

class SetupPage extends Component {
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
      <StandardLayout>
        {this.state.isScriptLoading ? <Loader /> : <SetupPanel />}
      </StandardLayout>
    )
  }
}

export default SetupPage
