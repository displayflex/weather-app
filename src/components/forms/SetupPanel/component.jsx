import React from 'react'

import Form from './styles'
import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/base/PrimaryButton'

const SetupPanel = () => {
  const services = [
    {
      id: 'open_weather',
      name: 'Open Weather',
    },
    {
      id: 'apixu',
      name: 'APIXU',
    },
  ] // @todo ?

  return (
    <Form>
      <CitySearchField />
      <ServiceSelectField services={services} />
      <PrimaryButton>Show weather</PrimaryButton>
    </Form>
  )
}

export default SetupPanel
