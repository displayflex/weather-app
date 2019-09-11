import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'

import { SETUP_PAGE_PATH, WEATHER_PAGE_PATH } from '@/constants'

const SetupPage = React.lazy(() => import('@/components/pages/Setup'))
const WeatherPage = React.lazy(() => import('@/components/pages/Weather'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Route exact path={SETUP_PAGE_PATH} component={SetupPage} />
      <Route exact path={WEATHER_PAGE_PATH} component={WeatherPage} />
    </React.Suspense>
  </Router>
)
