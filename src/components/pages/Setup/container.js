import { connect } from 'react-redux'
import SetupPage from '@/components/pages/Setup/component'
import { getGeolocationData, loadYandexScript } from '@/actions/services'
import { setLocationData } from '@/actions/location'

const mapStateToProps = state => ({
  isYandexScriptLoaded: state.isYandexScriptLoaded,
  isYandexScriptLoadFailed: state.isYandexScriptLoadFailed,
})

const mapDispatchToProps = dispatch => ({
  loadYandexScript: () => dispatch(loadYandexScript()),
  getGeolocationData: () => dispatch(getGeolocationData()),
  setLocationData: payload => dispatch(setLocationData(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPage)
