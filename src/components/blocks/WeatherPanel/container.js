import { connect } from 'react-redux'

import WeatherPanel from '@/components/blocks/WeatherPanel/component'

const mapStateToProps = state => ({
  temperature: state.location.temperature,
  weather: state.location.weather,
})

export default connect(mapStateToProps)(WeatherPanel)
