import React from 'react'

import CitySearchField from '@/components/forms/CitySearchField'
import ServiceSelectField from '@/components/forms/ServiceSelectField'

const SetupPanel = () => {
  return (
    <form>
      <CitySearchField />
      <ServiceSelectField />
      <button>Show weather</button>
    </form>
  )
}

export default SetupPanel
