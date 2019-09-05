import React from 'react'

import CityLabel from '@/components/blocks/CityLabel'
import WeatherWidget from '@/components/blocks/WeatherWidget'

const WeatherPanel = () => {
  return (
    <div>
      <CityLabel />
      <WeatherWidget />
      <button type="button">Change Setup</button>
    </div>
  )
}

export default WeatherPanel
