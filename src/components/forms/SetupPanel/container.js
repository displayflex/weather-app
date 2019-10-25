import { connect } from 'react-redux'
import SetupPanel from '@/components/forms/SetupPanel/component'
import { setWeatherData, setDataFromStorage } from '@/actions/location'

const mapStateToProps = state => ({
  cityName: state.location.cityName,
  cityInputValue: state.location.cityInputValue,
})

const mapDispatchToProps = dispatch => ({
  setWeatherData: payload => dispatch(setWeatherData(payload)),
  setDataFromStorage: payload => dispatch(setDataFromStorage(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPanel)
