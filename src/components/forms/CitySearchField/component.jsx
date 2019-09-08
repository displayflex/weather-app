import React, { Component } from 'react'

import CitySearchInput from '@/components/forms/CitySearchInput'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import { loadYandexScript, getGeolocationData, fetchApixuData } from '@/utils/services'
import Wrapper from './styles'

class CitySearchField extends Component {
  state = {
    isScriptLoaded: false,
  }

  componentDidMount () {
    const scriptSuccesLoadHandler = () => {
      this.setState({ isScriptLoaded: true })
    }

    const scriptErrorLoadHandler = () => {
      // @todo
    }

    loadYandexScript(scriptSuccesLoadHandler, scriptErrorLoadHandler)
  }

  handleFindCityClick = () => {
    if (this.state.isScriptLoaded) {
      const geolocationData = getGeolocationData()
      // @todo
      console.log(geolocationData)
      // fetchApixuData(geolocationData.latitude, geolocationData.longitude)
    }
  }

  render () {
    return (
      <Wrapper>
        <label htmlFor="city">Your City:</label>
        <CitySearchInput />
        <SecondaryButton
          icon="search"
          onClick={this.handleFindCityClick}
          disabled={!this.state.isScriptLoaded}
        >
          Find your city
        </SecondaryButton>
      </Wrapper>
    )
  }
}

// @todo disabled button or do not render button?

export default CitySearchField
