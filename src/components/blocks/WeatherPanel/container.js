import { connect } from 'react-redux'
import WeatherPanel from '@/components/blocks/WeatherPanel/component'
import { resetIsWeatherDataSet } from '@/actions/location'

const mapStateToProps = state => ({
  temperature: state.location.temperature,
  weather: state.location.weather,
})

const mapDispatchToProps = dispatch => ({
  resetIsWeatherDataSet: () => dispatch(resetIsWeatherDataSet()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPanel)
