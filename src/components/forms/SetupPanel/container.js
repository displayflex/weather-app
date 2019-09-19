import { connect } from 'react-redux'
import SetupPanel from '@/components/forms/SetupPanel/component'
import { setWeatherData, resetIsWeatherDataSet, setDataFromStorage } from '@/actions/location'

const mapStateToProps = state => ({
  cityName: state.location.cityName,
  cityInputValue: state.location.cityInputValue,
  isWeatherDataSet: state.location.isWeatherDataSet,
})

const mapDispatchToProps = dispatch => ({
  setWeatherData: payload => dispatch(setWeatherData(payload)),
  resetIsWeatherDataSet: () => dispatch(resetIsWeatherDataSet()),
  setDataFromStorage: payload => dispatch(setDataFromStorage(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPanel)
