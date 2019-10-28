import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import { SETUP_PAGE_PATH } from '@/constants/paths'
import Wrapper, { ErrorStatus } from './styles'

const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorStatus>
        <b>
          <Icon type="api" /> 404
        </b>
      </ErrorStatus>
      <p>Page Not Found</p>
      <Link to={SETUP_PAGE_PATH}>Go back</Link>
    </Wrapper>
  )
}

export default ErrorPage
