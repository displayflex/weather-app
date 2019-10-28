import { connect } from 'react-redux'

import WeatherPanel from '@/components/blocks/WeatherPanel/component'

const mapStateToProps = state => ({
  temperature: state.location.weather.temperature,
  weatherDescription: state.location.weather.description,
})

export default connect(mapStateToProps)(WeatherPanel)
