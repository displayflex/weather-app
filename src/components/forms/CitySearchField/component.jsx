import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CitySearchInput from '@/components/forms/CitySearchInput'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'
import { getGeolocationData } from '@/utils/services'
import Wrapper from './styles'

class CitySearchField extends Component {
  handleFindCityClick = () => {
    this.props.turnOnIsLoading()
    getGeolocationData().then(
      responseData => {
        // console.log(responseData.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.text)
        this.props.setCoords({
          longitude: responseData.geoObjects.position[0],
          latitude: responseData.geoObjects.position[1],
        })
        this.props.turnOffIsLoading()
      },
      error => console.log('error', error) // @todo
    )
  }

  render () {
    return (
      <Wrapper>
        <label htmlFor="city">Your City:</label>
        <CitySearchInput disabled={this.props.isLoading} />
        <SecondaryButton icon="search" onClick={this.handleFindCityClick} loading={this.props.isLoading}>
          {this.props.isLoading ? '' : 'Find your city'}
        </SecondaryButton>
        {this.props.city && (
          <p>
            Your selected city: <b>{this.props.city}</b>
          </p>
        )}
      </Wrapper>
    )
  }
}

CitySearchField.propTypes = {
  city: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  setCoords: PropTypes.func.isRequired,
  turnOnIsLoading: PropTypes.func.isRequired,
  turnOffIsLoading: PropTypes.func.isRequired,
}

export default CitySearchField
