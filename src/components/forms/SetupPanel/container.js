import { connect } from 'react-redux'
import SetupPanel from '@/components/forms/SetupPanel/component'
import { setWeatherData } from '@/actions/location'

const mapStateToProps = state => ({
  cityName: state.location.cityName,
  cityInputValue: state.location.cityInputValue,
})

const mapDispatchToProps = dispatch => ({
  setWeatherData: payload => dispatch(setWeatherData(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPanel)
