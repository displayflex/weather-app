import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ReactRouterGlobalHistory } from 'react-router-global-history'

import Loader from '@/components/blocks/global/Loader'

import { SETUP_PAGE_PATH, WEATHER_PAGE_PATH, ERROR_PAGE_PATH } from '@/constants'

const SetupPage = React.lazy(() => import('@/components/pages/Setup'))
const WeatherPage = React.lazy(() => import('@/components/pages/Weather'))
const ErrorPage = React.lazy(() => import('@/components/pages/Error'))

export default () => (
  <Router>
    <ReactRouterGlobalHistory />
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={SETUP_PAGE_PATH} component={SetupPage} />
        <Route exact path={WEATHER_PAGE_PATH} component={WeatherPage} />
        <Route exact path={ERROR_PAGE_PATH} component={ErrorPage} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Suspense>
  </Router>
)
