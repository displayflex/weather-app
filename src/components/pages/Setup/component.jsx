import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import StandardLayout from '@/components/layouts/Standard'
import SetupPanel from '@/components/forms/SetupPanel'
import Loader from '@/components/blocks/global/Loader'
import { getServiceUrl } from '@/utils/services'
import { ERROR_PAGE_PATH } from '@/constants/paths'
import { YANDEX } from '@/constants'

class SetupPage extends Component {
  state = {
    isScriptLoadedWithError: false,
  }

  handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const [scriptTag] = scriptTags
      scriptTag.onload = this.handleScriptLoad
      scriptTag.onerror = this.handleScriptLoadError
    }
  }

  handleScriptLoad = () => {
    this.props.setLocationParams()
  }

  handleScriptLoadError = () => {
    this.setState({ isScriptLoadedWithError: true })
  }

  render () {
    if (this.state.isScriptLoadedWithError) {
      return <Redirect to={ERROR_PAGE_PATH} />
    }

    return (
      <>
        <Helmet onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
          <script src={getServiceUrl(YANDEX)} />
        </Helmet>
        <StandardLayout>
          {this.props.isErrorInLoad ? <SetupPanel /> : <Loader />}
        </StandardLayout>
      </>
    )
  }
}

SetupPage.propTypes = {
  isErrorInLoad: PropTypes.bool.isRequired,
  setLocationParams: PropTypes.func.isRequired,
}

export default SetupPage
