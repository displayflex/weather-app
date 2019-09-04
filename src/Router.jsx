import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'

import { SETUP_PAGE_PATH } from '@/constants'

const SetupPage = React.lazy(() => import('@/components/pages/Setup'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Route exact path={SETUP_PAGE_PATH} component={SetupPage} />
    </React.Suspense>
  </Router>
)
