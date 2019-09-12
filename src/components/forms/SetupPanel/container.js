import { connect } from 'react-redux'
import SetupPanel from '@/components/forms/SetupPanel/component'
import { setLocationData, setWeatherData } from '@/actions/location'

const mapStateToProps = state => ({
  city: state.location.city,
  cityInputValue: state.location.cityInputValue,
  service: state.services.current,
})

const mapDispatchToProps = dispatch => ({
  setLocationData: payload => dispatch(setLocationData(payload)),
  setWeatherData: payload => dispatch(setWeatherData(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPanel)
