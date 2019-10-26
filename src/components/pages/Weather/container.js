import { connect } from 'react-redux'

import WeatherPage from '@/components/pages/Weather/component'
import { showStoragedResult } from '@/actions/location'

const mapStateToProps = state => ({
  isStorageDataRecieved: state.location.isStorageDataRecieved,
})

const mapDispatchToProps = dispatch => ({
  showStoragedResult: payload => dispatch(showStoragedResult(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage)
