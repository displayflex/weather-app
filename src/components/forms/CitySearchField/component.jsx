import React, { Component } from 'react'

import CitySearchInput from '@/components/forms/CitySearchInput'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import { getGeolocationData } from '@/utils/services'
import Wrapper from './styles'

class CitySearchField extends Component {
  state = {
    coords: {
      longitude: 0,
      latitude: 0,
    },
  }

  handleFindCityClick = () => {
    getGeolocationData().then(
      result => {
        this.setState(state => ({
          ...state,
          coords: {
            longitude: result.geoObjects.position[0],
            latitude: result.geoObjects.position[1],
          },
        }))
      },
      err => console.log('error', err) // @todo what is here??
    )
  }

  render () {
    return (
      <Wrapper>
        <label htmlFor="city">Your City:</label>
        <CitySearchInput />
        <SecondaryButton
          icon="search"
          onClick={this.handleFindCityClick}
        >
          Find your city
        </SecondaryButton>
      </Wrapper>
    )
  }
}

// @todo disabled button or do not render button?

export default CitySearchField
