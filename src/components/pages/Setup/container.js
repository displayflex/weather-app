import { connect } from 'react-redux'

import SetupPage from '@/components/pages/Setup/component'
import { setLocationParams } from '@/actions/location'

const mapStateToProps = state => ({
  isErrorInLoad: state.location.isErrorInLoad,
  cityName: state.location.cityName,
})

const mapDispatchToProps = dispatch => ({
  setLocationParams: () => dispatch(setLocationParams()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPage)
