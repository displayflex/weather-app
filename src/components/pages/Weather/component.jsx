import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import localforage from 'localforage'

import WeatherPanel from '@/components/blocks/WeatherPanel'
import { isCacheingTimeElapsed } from '@/utils/storage'
import Loader from '@/components/blocks/global/Loader'

const WeatherPage = ({ isStorageDataRecieved, showStoragedResult }) => {
  const [isCheckingStorage, setIsChecckingStorage] = useState(true)

  useEffect(() => {
    if (!isStorageDataRecieved) {
      localforage.getItem('weatherAppData', (err, storageData) => {
        if (err) {
          setIsChecckingStorage(false)
          return
        }

        if (storageData && !isCacheingTimeElapsed(storageData.clientDate)) {
          showStoragedResult({ storageData, withRedirect: false })
        } else {
          setIsChecckingStorage(false)
        }
      })
    } else {
      setIsChecckingStorage(false)
    }
  }, [isStorageDataRecieved, showStoragedResult])

  const content = isStorageDataRecieved || !isCheckingStorage ? <WeatherPanel /> : <Loader />

  return content
}

WeatherPage.propTypes = {
  isStorageDataRecieved: PropTypes.bool.isRequired,
  showStoragedResult: PropTypes.func.isRequired,
}

export default WeatherPage
