import React from 'react'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Form from './styles'

const SetupPanel = () => {
  return (
    <Form>
      <CitySearchField />
      <ServiceSelectField />
      <PrimaryButton className="result-btn" icon="cloud-upload">
        Show weather
      </PrimaryButton>
    </Form>
  )
}

export default SetupPanel

// @todo className="result-btn" ???
