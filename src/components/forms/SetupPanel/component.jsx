import React from 'react'

import Form from './styles'
import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'

// @todo move to constants...
// export const OPEN_WEARHER_SERVICE = 'OPEN_WEARHER_SERVICE'
// import { OPEN_WEARHER_SERVICE } from '@/constants'

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
