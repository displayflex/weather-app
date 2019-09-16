import React from 'react'

import { Icon } from 'antd'
import HeaderWrapper, { MainHeading } from './styles'

export default () => (
  <HeaderWrapper>
    <MainHeading>
      <Icon type="cloud" theme="filled" /> Weather App
    </MainHeading>
  </HeaderWrapper>
)
