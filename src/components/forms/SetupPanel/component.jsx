import React from 'react'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'
import PrimaryButton from '@/components/blocks/global/PrimaryButton'
import Form from './styles'

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
      <PrimaryButton className="result-btn" icon="cloud-upload">Show weather</PrimaryButton>
    </Form>
  )
}

export default SetupPanel

// @todo className="result-btn" ???
