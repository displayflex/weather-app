import { connect } from 'react-redux'
import WeatherWidget from '@/components/blocks/WeatherWidget/component'

const mapStateToProps = state => ({
  temperature: state.location.temperature,
  weather: state.location.weather,
  weatherImageSrc: state.location.weatherImageSrc,
})

export default connect(mapStateToProps)(WeatherWidget)
