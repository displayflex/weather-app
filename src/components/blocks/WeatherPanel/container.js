import { connect } from 'react-redux'

import WeatherPanel from '@/components/blocks/WeatherPanel/component'
import { showStoragedResult } from '@/actions/location'

const mapStateToProps = state => ({
  temperature: state.location.temperature,
  weather: state.location.weather,
})

const mapDispatchToProps = dispatch => ({
  showStoragedResult: payload => dispatch(showStoragedResult(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPanel)
