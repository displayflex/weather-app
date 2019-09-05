import React from 'react'

import StandardLayout from '@/components/layouts/Standard'
import CitySearch from '@/components/forms/CitySearch'
import ServiceSelect from '@/components/forms/ServiceSelect'

const SetupPage = () => (
  <StandardLayout>
    <form>
      <CitySearch />
      <ServiceSelect />
      <button>Show weather</button>
    </form>
  </StandardLayout>
)

export default SetupPage
