import React, { Component } from 'react'
import PropTypes from 'prop-types'

import StandardLayout from '@/components/layouts/Standard'
import SetupPanel from '@/components/forms/SetupPanel'
import Loader from '@/components/blocks/global/Loader'
import { loadYandexScript, getGeolocationData, getDataFromCoords } from '@/utils/services'

class SetupPage extends Component {
  state = {
    isScriptLoading: true,
    isScriptLoadedWithError: false,
  }

  componentDidMount () {
    const scriptSuccesLoadHandler = () => {
      getGeolocationData().then(
        responseData => {
          const [longitude, latitude] = responseData.geoObjects.position

          // @todo .then in .then??
          getDataFromCoords(longitude, latitude).then(data => {
            this.props.setLocationData({
              longitude,
              latitude,
              city: data.city,
            })

            this.setState({ isScriptLoading: false })
          })
        },
        error => console.log('error', error) // @todo
      )
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
      <StandardLayout>{this.state.isScriptLoading ? <Loader /> : <SetupPanel />}</StandardLayout>
    )
  }
}

SetupPage.propTypes = {
  setLocationData: PropTypes.func.isRequired,
}

export default SetupPage
