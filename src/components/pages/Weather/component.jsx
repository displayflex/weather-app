import React from 'react'

import StandardLayout from '@/components/layouts/Standard'
import CityLabel from '@/components/blocks/CityLabel'
import WeatherWidget from '@/components/blocks/WeatherWidget'

const WeatherPage = () => (
  <StandardLayout>
    <CityLabel />
    <WeatherWidget />
    <button type="button">Change Setup</button>
  </StandardLayout>
)

export default WeatherPage
