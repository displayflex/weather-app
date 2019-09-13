import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import StandardLayout from '@/components/layouts/Standard'
import SetupPanel from '@/components/forms/SetupPanel'
import Loader from '@/components/blocks/global/Loader'
import { loadYandexScript, getGeolocationData, getDataFromCoords } from '@/utils/services'
import { ERROR_PAGE_PATH } from '@/constants/paths'

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
              longitude: longitude,
              latitude: latitude,
              city: data.region,
            })

            this.setState({ isScriptLoading: false })
          })
        },
        () => {
          this.setState({ isScriptLoadedWithError: true })
        }
      )
    }

    const scriptErrorLoadHandler = () => {
      this.setState({ isScriptLoadedWithError: true })
    }

    loadYandexScript(scriptSuccesLoadHandler, scriptErrorLoadHandler)
  }

  render () {
    if (this.state.isScriptLoadedWithError) {
      return <Redirect to={ERROR_PAGE_PATH} />
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
