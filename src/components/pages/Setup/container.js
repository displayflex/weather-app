import { connect } from 'react-redux'
import SetupPage from '@/components/pages/Setup/component'
import { setLocationData } from '@/actions/location'

// const mapStateToProps = state => ({
//   city: state.location.city,
//   isLoading: state.loading.isLoading,
// })

const mapDispatchToProps = dispatch => ({
  setLocationData: payload => dispatch(setLocationData(payload)),
})

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(SetupPage)
