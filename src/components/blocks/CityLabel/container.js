import { connect } from 'react-redux'
import CityLabel from '@/components/blocks/CityLabel/component'

const mapStateToProps = state => ({
  cityName: state.location.cityName,
})

export default connect(mapStateToProps)(CityLabel)
