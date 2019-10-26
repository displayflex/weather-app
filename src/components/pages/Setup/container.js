import { connect } from 'react-redux'

import SetupPage from '@/components/pages/Setup/component'
import { setLocationParams, showStoragedResult } from '@/actions/location'

const mapStateToProps = state => ({
  isErrorInLoad: state.location.isErrorInLoad,
  isStorageDataRecieved: state.location.isStorageDataRecieved,
  cityName: state.location.cityName,
})

const mapDispatchToProps = dispatch => ({
  setLocationParams: () => dispatch(setLocationParams()),
  showStoragedResult: payload => dispatch(showStoragedResult(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPage)
