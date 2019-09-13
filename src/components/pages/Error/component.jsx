import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import { SETUP_PAGE_PATH } from '@/constants/paths'
import StandardLayout from '@/components/layouts/Standard'
import Wrapper from './styles'

const ErrorPage = () => {
  return (
    <StandardLayout>
      <Wrapper>
        <p>
          <b>
            <Icon type="api" /> 404
          </b>
        </p>
        <p>Page Not Found</p>
        <Link to={SETUP_PAGE_PATH}>Go back</Link>
      </Wrapper>
    </StandardLayout>
  )
}

export default ErrorPage
