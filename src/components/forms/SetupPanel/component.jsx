import React from 'react'
import PropTypes from 'prop-types'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Form from './styles'

const SetupPanel = ({ city }) => {
  return (
    <Form>
      <CitySearchField />
      <ServiceSelectField />
      <PrimaryButton className="result-btn" icon="cloud-upload" disabled={!city}>
        Show weather
      </PrimaryButton>
    </Form>
  )
}

SetupPanel.propTypes = {
  city: PropTypes.string,
}

export default SetupPanel

// @todo className="result-btn" ???
