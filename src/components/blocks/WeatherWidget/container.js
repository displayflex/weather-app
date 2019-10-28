import { connect } from 'react-redux'
import WeatherWidget from '@/components/blocks/WeatherWidget/component'

const mapStateToProps = state => ({
  weather: state.location.weather,
})

export default connect(mapStateToProps)(WeatherWidget)
