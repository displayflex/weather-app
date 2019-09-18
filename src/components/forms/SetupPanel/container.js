import { connect } from 'react-redux'
import SetupPanel from '@/components/forms/SetupPanel/component'
import { setWeatherData, resetIsWeatherDataSet } from '@/actions/location'

const mapStateToProps = state => ({
  city: state.location.city,
  cityInputValue: state.location.cityInputValue,
  isWeatherDataSet: state.location.isWeatherDataSet,
})

const mapDispatchToProps = dispatch => ({
  setWeatherData: payload => dispatch(setWeatherData(payload)),
  resetIsWeatherDataSet: () => dispatch(resetIsWeatherDataSet()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPanel)
