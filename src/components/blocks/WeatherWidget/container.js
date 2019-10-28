import { connect } from 'react-redux'
import WeatherWidget from '@/components/blocks/WeatherWidget/component'

const mapStateToProps = state => ({
  temperature: state.location.temperature,
  weather: state.location.weather,
  weatherImageSrc: state.location.weatherImageSrc,
  pressure: state.location.pressure,
  wind: state.location.wind,
  humidity: state.location.humidity,
})

export default connect(mapStateToProps)(WeatherWidget)
