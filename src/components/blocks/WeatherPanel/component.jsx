import React from 'react'

import CityLabel from '@/components/blocks/CityLabel'
import WeatherWidget from '@/components/blocks/WeatherWidget'
import SecondaryButton from '@/components/blocks/global/SecondaryButton'

const WeatherPanel = () => {
  return (
    <div>
      <CityLabel />
      <WeatherWidget />
      <SecondaryButton icon="setting">
        Change Setup
      </SecondaryButton>
    </div>
  )
}

export default WeatherPanel
