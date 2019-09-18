import { connect } from 'react-redux'

import SetupPage from '@/components/pages/Setup/component'
import { setLocationParams } from '@/actions/location'

const mapStateToProps = state => ({
  isErrorInLoad: state.location.isErrorInLoad,
  city: state.location.city,
})

const mapDispatchToProps = dispatch => ({
  setLocationParams: () => dispatch(setLocationParams()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPage)
